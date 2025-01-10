const users = [
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8e8e"),
        "username": "johndoe123",
        "email": "john.doe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "phone": "+1-555-1234",
        "role": "user",
        "created_at": ISODate("2024-12-20T12:00:00Z"),
        "address": {
            "street": "123 Elm St",
            "city": "New York",
            "state": "NY",
            "zip": "10001"
        },
        "hobby": "Reading"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8e9f"),
        "username": "janesmith456",
        "email": "jane.smith@example.com",
        "first_name": "Jane",
        "last_name": "Smith",
        "phone": "+1-555-5678",
        "role": "admin",
        "created_at": ISODate("2024-12-18T09:30:00Z"),
        "address": {
            "street": "456 Oak St",
            "city": "Los Angeles",
            "state": "CA",
            "zip": "90001"
        },
        "hobby": "Painting"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f0g"),
        "username": "alicebrown789",
        "email": "alice.brown@example.com",
        "first_name": "Alice",
        "last_name": "Brown",
        "phone": "+1-555-9876",
        "role": "user",
        "created_at": ISODate("2024-12-10T14:00:00Z"),
        "address": {
            "street": "789 Pine St",
            "city": "Chicago",
            "state": "IL",
            "zip": "60601"
        },
        "hobby": "Cycling"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f1h"),
        "username": "bobwhite321",
        "email": "bob.white@example.com",
        "first_name": "Bob",
        "last_name": "White",
        "phone": "+1-555-6543",
        "role": "user",
        "created_at": ISODate("2024-12-15T16:00:00Z"),
        "address": {
            "street": "321 Maple St",
            "city": "Houston",
            "state": "TX",
            "zip": "77001"
        },
        "hobby": "Football"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f2i"),
        "username": "charliegreen654",
        "email": "charlie.green@example.com",
        "first_name": "Charlie",
        "last_name": "Green",
        "phone": "+1-555-2345",
        "role": "admin",
        "created_at": ISODate("2024-12-05T11:30:00Z"),
        "address": {
            "street": "654 Birch St",
            "city": "Phoenix",
            "state": "AZ",
            "zip": "85001"
        },
        "hobby": "Photography"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f3j"),
        "username": "davidgrey987",
        "email": "david.grey@example.com",
        "first_name": "David",
        "last_name": "Grey",
        "phone": "+1-555-8765",
        "role": "user",
        "created_at": ISODate("2024-12-12T13:30:00Z"),
        "address": {
            "street": "987 Cedar St",
            "city": "Dallas",
            "state": "TX",
            "zip": "75201"
        },
        "hobby": "Gaming"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f4k"),
        "username": "eveblack234",
        "email": "eve.black@example.com",
        "first_name": "Eve",
        "last_name": "Black",
        "phone": "+1-555-4321",
        "role": "user",
        "created_at": ISODate("2024-12-08T10:00:00Z"),
        "address": {
            "street": "234 Oak St",
            "city": "San Francisco",
            "state": "CA",
            "zip": "94102"
        },
        "hobby": "Hiking"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f5l"),
        "username": "frankyellow876",
        "email": "frank.yellow@example.com",
        "first_name": "Frank",
        "last_name": "Yellow",
        "phone": "+1-555-6789",
        "role": "admin",
        "created_at": ISODate("2024-12-02T14:30:00Z"),
        "address": {
            "street": "876 Elm St",
            "city": "Miami",
            "state": "FL",
            "zip": "33101"
        },
        "hobby": "Running"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f6m"),
        "username": "graceblue543",
        "email": "grace.blue@example.com",
        "first_name": "Grace",
        "last_name": "Blue",
        "phone": "+1-555-3456",
        "role": "user",
        "created_at": ISODate("2024-12-01T08:00:00Z"),
        "address": {
            "street": "543 Pine St",
            "city": "Seattle",
            "state": "WA",
            "zip": "98101"
        },
        "hobby": "Traveling"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f7n"),
        "username": "hankred321",
        "email": "hank.red@example.com",
        "first_name": "Hank",
        "last_name": "Red",
        "phone": "+1-555-1234",
        "role": "user",
        "created_at": ISODate("2024-12-06T11:15:00Z"),
        "address": {
            "street": "321 Birch St",
            "city": "Denver",
            "state": "CO",
            "zip": "80201"
        },
        "hobby": "Swimming"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f8o"),
        "username": "isabelpurple654",
        "email": "isabel.purple@example.com",
        "first_name": "Isabel",
        "last_name": "Purple",
        "phone": "+1-555-7654",
        "role": "admin",
        "created_at": ISODate("2024-12-09T12:45:00Z"),
        "address": {
            "street": "654 Willow St",
            "city": "Boston",
            "state": "MA",
            "zip": "02101"
        },
        "hobby": "Cooking"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f9p"),
        "username": "jackorange987",
        "email": "jack.orange@example.com",
        "first_name": "Jack",
        "last_name": "Orange",
        "phone": "+1-555-8765",
        "role": "user",
        "created_at": ISODate("2024-12-11T09:30:00Z"),
        "address": {
            "street": "987 Maple St",
            "city": "San Diego",
            "state": "CA",
            "zip": "92101"
        },
        "hobby": "Basketball"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f10q"),
        "username": "kellywhite234",
        "email": "kelly.white@example.com",
        "first_name": "Kelly",
        "last_name": "White",
        "phone": "+1-555-5432",
        "role": "user",
        "created_at": ISODate("2024-12-13T10:30:00Z"),
        "address": {
            "street": "234 Cedar St",
            "city": "Austin",
            "state": "TX",
            "zip": "73301"
        },
        "hobby": "Photography"
    },
    {
        "_id": ObjectId("5f8f8c8b8e8b8b8b8e8e8f11r"),
        "username": "lucasbrown876",
        "email": "lucas.brown@example.com",
        "first_name": "Lucas",
        "last_name": "Brown",
        "phone": "+1-555-3456",
        "role": "admin",
        "created_at": ISODate("2024-12-07T14:00:00Z"),
        "address": {
            "street": "876 Oak St",
            "city": "Charlotte",
            "state": "NC",
            "zip": "28201"
        },
        "hobby": "Golf"
    }]
module.exports = { users }