const { request } = require("express");
const Video = require("../model/video");
const Mentor = require('../model/mentor');

module.exports = {
    addVideo: async (req, res) => {
        // const video = new Video({
        //   mentor: req.body.mentor,
        //   title: req.body.title,
        //   link: req.body.link,
        // });
        try {
          //find vodeo's owner
          const owner = await Mentor.findById(req.body.owner);

          //add new video
          const addVideo = req.body;
          delete addVideo.owner;

          const video = new Video(addVideo);
          video.owner = owner;

          await video.save();

          //add newly created video to owner
          owner.video.push(video);
          await owner.save();
          res.status(201).json(video);

          // const savedVideo = await video.save();
          // res.status(201).send(savedVideo);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    getAllVideo: async (req, res) => {
        try {
          const videos = await Video.find();
          res.status(200).json(videos);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    getVideoById: async (req, res) => {
        try {
          const video = await Video.findById(req.params.videoId);
          res.status(200).json(video);
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    deleteVideoById: async (req, res) => {
        try {
          //get video
          //const removeVideo = await Video.findById({_id: req.params.videoId});
          const { videoId } = req.params;
          //get video
          const video = await Video.findById(videoId);
          const ownerId = Video.owner;
          //get owner
          const owner = await Mentor.findById(ownerId);
          //remove video
          await video.remove();
          //remove video from owner's video list
          owner.video.pull(video);// error
          
          await owner.save();

          res.status(200).json({ success: true});
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
    updateVideoById: async (req, res) => {
        try {
          const updatedVideo = await Video.findByIdAndUpdate(
            {_id: req.params.videoId}, 
            req.body);
            res.status(200).json({ success: true});
        } catch (err) {
          res.status(400).send(err);
          console.log(err);
        }
    },
};