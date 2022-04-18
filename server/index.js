import express from "express";

import user from "./src/routes/api/userRoutes/user.Route.js";

import errorHandler from "./src/middlewares/errorHandler.js"
import cookieParser from "cookie-parser" ;
import cors from "cors";

import mongoose from "mongoose";

// cache
import {clearHash} from "./src/controllers/cachingControllers/redis.Controller.js";




const app =  express();

app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// database connections
// connectDatabase();
// const db = require("./src/config/databaseConnection").mongoURI;
// import db from "./src/config/databaseConnection";

// Connect to MongoDB
let db =
  "mongodb+srv://serverBoiler:BrxyutmzqiCM4U6c@cluster0.t30x6.mongodb.net/RagdollCatServer?retryWrites=true&w=majority";

mongoose
  .connect(db)
  // .then(() => console.log("MongoDB Connected"))
  .then((res) => console.log(`Db connected on ${res.connection.user}`))
  .catch((err) => console.log(err));





// checkConnection();

// api routes
app.use(express.json());
app.use("/user", user);


// error handling middleware
// app.use(errorHandler);


const PORT = process.env.port || 5000;
app.listen(PORT, function () {
  console.log("server is started on port " + PORT);
});
