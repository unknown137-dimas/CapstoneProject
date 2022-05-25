const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

//DB connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log("connected to DB"));

//Routes
const auth_route = require("./routes/auth");
const mentor_route = require("./routes/mentor");
const video_route = require("./routes/video")
//middleware
app.use(cors());
app.use(express.json());

//Route middleware
app.use("/api/user", auth_route);
app.use("/api/mentor", mentor_route);
app.use("/api/video", video_route)

app.listen(3000, () => console.log("Server is Up and Running"));
