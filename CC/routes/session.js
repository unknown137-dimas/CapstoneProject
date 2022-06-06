const session_route = require("express").Router();
const Session = require("../model/session");

// add session can only be done via mentor
  
session_route.get("/", async (req, res) => {
    // get all Session
    const getAllSession = await Session.find({});
    if (!getAllSession) {
      return res.status(400).send("Tidak ada sesi yang tersedia");
    } else {
      res.json(getAllSession);
    }
  });
  
  // get session by id
  session_route.get("/:sessionId", async (req, res) => {
    const { sessionId } = req.params;
    const session = await Session.findById(sessionId);
    res.status(200).json(session);
  });

  module.exports = session_route;
