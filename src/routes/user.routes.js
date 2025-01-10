import express from "express";
import bcrypt from "bcrypt";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { auth } from "../middleware/auth.js";
import { upload } from "../middleware/imageUpload.js";

const router = express.Router();

//////////////   login credentials //////////////
router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        const error = new Error("All fields are required");
        error.status = 404;
        return res.send({ message: "All fields are required" });
        // next(error);
    }

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(404).send({ message: "Invalid password" });
        }
        //jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });
        // res.header('auth-token', token)

        return res.send({ token, message: "Login successful" });
    } catch (error) {
        console.log(error);
        return res.send({ message: error });
    }
});

////////   USer operation   //////////////////////////////////

router.post("/", upload.single("avatar"), async (req, res, next) => {
    const { name, email, password } = req.body;
    // todo:validaate request(request validation library)(express validation library)
    if (!name || !email || !password) {
        const error = new Error("All fields are required");
        error.status = 404;
        next(error);
    }
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newData = new User({
            name: name,
            email: email,
            password: hash,
            avatar: req.file ? req.file?.path : null, // Save the image path
        });
        const savedData = await newData.save();

        res
            .status(201)
            .send({ message: "User created successfully", data: savedData });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.get("/", auth, async (req, res, next) => {
    try {
        // Parse limit and offset with default values
        const limit = parseInt(req.query.limit, 10) || 10; // Default limit: 10
        const offset = parseInt(req.query.offset, 10) || 0; // Default offset: 0

        // Validate limit and offset
        if (limit <= 0 || offset < 0) {
            return res.status(400).send({
                message:
                    "Limit must be greater than 0, and offset must be 0 or greater.",
            });
        }

        // Fetch total user count
        const totalUsers = await User.countDocuments();

        // Fetch users with pagination and sorting (newest first)
        const users = await User.find({}, { __v: 0 })
            .sort({ createdAt: -1 }) // Sort by newest first
            .skip(offset * limit)
            .limit(limit);

        // Send response with metadata and users
        res.status(200).send({
            metadata: {
                totalUsers,
                limit,
                offset,
                hasNextPage: (offset + 1) * limit < totalUsers,
                hasPrevPage: offset > 0,
            },
            users,
        });
    } catch (error) {
        console.error("Error fetching paginated users:", error);
        next(error);
    }
});

router.put("/:id", auth, upload.single("avatar"), async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne(
            {
                _id: id,
            },
            { __v: false }
        );
        if (email) {
            return res.status(400).send({ message: `Email Can't be changed` });
        }
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        if (name) {
            user.name = name;
        }
        if (password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            user.password = hash;
        }
        if (req.file) {
            user.avatar = req.file.path; // Update the avatar field with the new image path
        }

        const updatedUser = await user.save();
        res
            .status(200)
            .send({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
        console.log(error);
        next(error);
    }
});
router.delete("/:id", auth, async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await User.findOneAndDelete({ _id: id });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
    }
});

router.get("/search", auth, async (req, res, next) => {
    const { name, email } = req.query; // Extract query parameters
    console.log("Query Parameters:", { name, email });

    const filter = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (email) filter.email = { $regex: email, $options: "i" };

    console.log("Search Filter:", filter);

    try {
        // const users = await User.find(filter, { __v: false });
        const users = await User.find({
            $or: [{ email: email }, { name: name }],
        });
        if (users.length === 0) {
            return res.status(404).send({ message: "No users found" });
        }
        res.status(200).send(users);
    } catch (error) {
        console.error("Error in search route:", error);
        next(error);
    }
});

export default router;
