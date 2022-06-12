const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Firestore = require("@google-cloud/firestore);
dotenv.config();

//DB connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log("connected to DB"));
const db = new Firestore();

//Routes
const auth_route = require("./routes/auth");
const mentor_route = require("./routes/mentor");
const video_route = require("./routes/video");
const webinar_route = require("./routes/webinar");
const ticket_webinar_route = require("./routes/ticket");
const session_route = require("./routes/session");
const booking_route = require("./routes/booking");

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('api/mentor to access mentor | api/video to access video'));

//Route middleware
app.use("/api/user", auth_route);
app.use("/api/mentor", mentor_route);
app.use("/api/video", video_route);
app.use("/api/webinar", webinar_route);
app.use("/api/ticket", ticket_webinar_route);
app.use("/api/session", session_route);
app.use("/api/booking", booking_route);

const port = parseInt(process.env.PORT) || 8080;

app.listen(port, () => console.log(`Server is Up and Running at ${port}`));
