const mentor_route = require("express").Router();

//import controller
const mentorController = require('../controller/mentor');

//import helpers
const { validateParam, schemas } = require('../helpers/routeHelper');

mentor_route.route("/")
  .post(mentorController.addMentor)
  .get(mentorController.getAllMentor)

mentor_route.route("/:mentorId")
  // .get((validateParam(schemas.idSchema, 'mentorId')), mentorController.getMentorById)//with validator
  .get(mentorController.getMentorById)//without validator
  //.delete(mentorController.deleteMentorById)
  //.patch(mentorController.updateMentorById)

mentor_route.route("/:mentorId/video")
  .get(mentorController.getMentorVideo)
  .post(mentorController.addMentorVideo)

mentor_route.route("/:mentorId/mentee")
  .get(mentorController.getMentorMentee)
  .post(mentorController.addMentorMentee)

mentor_route.route("/:mentorId/session")
  .get(mentorController.getMentorSession)
  .post(mentorController.addMentorSession)

module.exports = mentor_route;
