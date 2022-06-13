const router = require("express").Router();
const Webinar = require("../model/webinar");
const jwt = require("jsonwebtoken");

// TAMBAH WEBINAR
router.post("/", async (req, res) => {
  // create webinar
  const webinar = new Webinar({
    event: req.body.event,
    date: req.body.date,
  });
  try {
    const savedWebinar = await webinar.save();
    res.send({ webinar: webinar._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  // get all webinar
  const getAllwebinar = await Webinar.find({});
  if (!getAllwebinar) {
    return res.status(400).send("Tidak ada webinar yang ditampilkan");
  } else {
    res.json(getAllwebinar);
  }
});

// get webinar by id
router.get("/:webinarId", async (req, res) => {
  const { webinarId } = req.params;
  const webinar = await Webinar.findById(webinarId);
  res.status(200).json(webinar);
});

module.exports = router;
