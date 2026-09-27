const messageQueue = require("./queue");

function processBookings() {
    console.log("Booking Consumer started...");

    while (messageQueue.length > 0) {
        const booking = messageQueue.shift();

        console.log(
            `Booking request for ${booking.memberName} → Confirmed`
        );

        console.log(
            `Schedule: ${booking.gym} | ${booking.date} | ${booking.time}`
        );
    }

    console.log("All booking requests processed.");
}

processBookings();