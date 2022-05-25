const video_route = require("express").Router();
const { request } = require("express");
const Video = require("../model/video");

//add video
video_route.post("/", async (req, res) => {
  const video = new Video({
    mentor: req.body.mentor,
    title: req.body.title,
    link: req.body.link,
  });
  try {
    const savedVideo = await video.save();
    res.status(200).send(savedVideo);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

//get all videos
video_route.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

//get specific videos
video_route.get("/:videoId", async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    res.json(video);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

//delete videos
video_route.delete("/:videoId", async (req, res) => {
  try {
    const removeVideo = await Video.remove({_id: req.params.videoId});
    res.json(removeVideo);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

//update videos
video_route.patch("/:videoId", async (req, res) => {
  try {
    const updatedVideo = await Video.updateOne(
      {_id: req.params.videoId}, 
      {$set: {
        mentor: req.body.mentor,
        title: req.body.title,
        link: req.body.link
      }});
    res.json(updatedVideo);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
module.exports = video_route;
