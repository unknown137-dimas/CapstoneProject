const booking_route = require("express").Router();
const Booking = require("../model/booking");
const Session = require("../model/session");
const User = require("../model/user");
const Mentor = require("../model/mentor");

//get all booking
booking_route.get("/", async (req, res) => {
    const getAllBooking = await Booking.find({});
    if (!getAllBooking) {
      return res.status(400).send("Tidak ada booking");
    } else {
      res.json(getAllBooking);
    }
  });

  //add booking
  booking_route.post("/:sessionId/:userId", async (req, res) => {
    const { sessionId } = req.params;
    const { userId } = req.params;
    const session = await Session.findById(sessionId);
    const user = await User.findById(userId);
    if (session) {
      const booking = new Booking({
        session: session,
        is_booked: req.body.is_booked,
      });
  
      //add booklist to session
      session.bookList.push(booking);
      await session.save();

      // assign user as a booker
      booking.mentee = user;
      await booking.save();
  
      // add booking to user's array booking
      user.booking.push(booking);
      await user.save();
      res.status(201).json(booking);
    }
  });

    // get booking by sessionId
    booking_route.get("/session/:sessionId", async (req, res) => {
      const { sessionId } = req.params;
      const session = await Session.findById(sessionId);
      res.status(200).json(session.bookList).populate;
    });
  
  // get booking by user_id
  booking_route.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user.booking);
  });
  



module.exports = booking_route;