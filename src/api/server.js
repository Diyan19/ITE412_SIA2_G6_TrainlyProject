const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

//Server status route
app.get("/", (req, res) => {
    res.send("Trainly REST API is running!");
});

// MEMBERS MODULE//
let members = [
    {
        id: 1,
        name: "Juan Dela Cruz",
        email: "juan@example.com",
        membership: "Premium"
    },
    {
        id: 2,
        name: "Maria Santos",
        email: "maria@example.com",
        membership: "Regular"
    }
];

// GET /members
app.get("/members", (req, res) => {
    res.json(members);
});

// POST /members
app.post("/members", (req, res) => {
    const { name, email, membership } = req.body;

    const newMember = {
        id: members.length + 1,
        name,
        email,
        membership
    };

    members.push(newMember);

    res.status(201).json(newMember);
});



// BOOKINGS MODULE//
let bookings = [
    {
        id: 1,
        memberId: 1,
        gym: "Trainly Fitness Center",
        date: "2026-09-28",
        time: "08:00 AM"
    },
    {
        id: 2,
        memberId: 2,
        gym: "Trainly Fitness Center",
        date: "2026-09-28",
        time: "10:00 AM"
    }
];

// GET /bookings
app.get("/bookings", (req, res) => {
    res.json(bookings);
});

// POST /bookings
app.post("/bookings", (req, res) => {
    const { memberId, gym, date, time } = req.body;

    const newBooking = {
        id: bookings.length + 1,
        memberId,
        gym,
        date,
        time
    };

    bookings.push(newBooking);

    res.status(201).json(newBooking);
});



// START SERVER
app.listen(PORT, () => {
    console.log(`Trainly REST API running at http://localhost:${PORT}`);
});