// const express = require('express')//old way to express
import express from "express"; //new way to express
import cors from "cors"; //import cors
import { connectDb } from "./src/config/db.js";
import env from "dotenv";
import userRouter from "./src/routes/user.routes.js";
import helmet from "helmet";

env.config(); // call config method from env
const app = express(); // call express function and store it in app variable
const PORT = process.env.PORT; // define port

app.use(express.json()); // use json middleware
app.use(cors()); // use json third party middleware
app.use(helmet()); // use json third party middleware

try {
    connectDb();
    console.log("connect to db");
} catch (error) {
    console.log(error);
}

app.get("/", function (req, res) {
    res.send({ response: "ok" });
});
app.use("/api/users", userRouter);
app.use("/upload", express.static("src/uploads"));

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ messge: "Something broke!" });
});

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
