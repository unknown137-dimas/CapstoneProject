const mentor_route = require("express").Router();
const Mentor = require("../model/mentor");

mentor_route.post("/", async (req, res) => {
  const mentor = new Mentor({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    expertise: req.body.expertise,
  });
  try {
    const savedMentor = await mentor.save();
    res.status(200).send(savedMentor);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

//get all mentors
mentor_route.get("/", async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});


//get specific mentor
mentor_route.get("/:mentorId", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    res.json(mentor);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

//delete mentor
mentor_route.delete("/:mentorId", async (req, res) => {
  try {
    const removeMentor = await Mentor.remove({_id: req.params.mentorId});
    res.json(removeMentor);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

//Update mentor
mentor_route.patch("/:mentorId", async (req, res) => {
  try {
    const updateMentor = await Mentor.updateOne(
      {_id: req.params.mentorId},
      {$set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        expertise: req.body.expertise
      }});
    res.json(updateMentor);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
module.exports = mentor_route;
