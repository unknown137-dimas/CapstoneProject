const router = require("express").Router();
const Ticket = require("../model/ticket");
const User = require("../model/user");
const Webinar = require("../model/webinar");

// book webinar
router.post("/:webinarId/:userId", async (req, res) => {
  const { webinarId } = req.params;
  const { userId } = req.params;
  const webinar = await Webinar.findById(webinarId);
  const user = await User.findById(userId);
  if (webinar) {
    const ticket = new Ticket({
      webinar: webinar,
      is_booked: req.body.is_booked,
    });

    // assign user as a ticket's owner
    ticket.user_id = user;
    await ticket.save();

    // add ticket to user's array tickets
    user.tickets.push(ticket);
    await user.save();
    res.status(201).json(ticket);
  }
});

// get ticket by user_id
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.json(user.tickets);
});

module.exports = router;