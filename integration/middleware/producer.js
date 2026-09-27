const messageQueue = require("./queue");

function submitBooking(memberId, memberName, gym, date, time) {
    const booking = {
        memberId,
        memberName,
        gym,
        date,
        time
    };

    messageQueue.push(booking);

    console.log(
        `Booking request submitted: ${JSON.stringify(booking)}`
    );
}

submitBooking(
    1,
    "Juan Dela Cruz",
    "Trainly Fitness Center",
    "2026-09-28",
    "08:00 AM"
);

submitBooking(
    2,
    "Maria Santos",
    "Trainly Fitness Center",
    "2026-09-28",
    "10:00 AM"
);

submitBooking(
    3,
    "Adrian Largo",
    "Trainly Fitness Center",
    "2026-09-29",
    "02:00 PM"
);