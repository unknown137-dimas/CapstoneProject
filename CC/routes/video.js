const video_route = require("express").Router();

const videoController = require('../controller/video');

video_route.route('/')
    //get all videos
    .get(videoController.getAllVideo)
    //add video
    .post(videoController.addVideo);

video_route.route("/:videoId")
    //get specific videos
    .get(videoController.getVideoById)
    .delete(videoController.deleteVideoById)
    .patch(videoController.updateVideoById);

module.exports = video_route;