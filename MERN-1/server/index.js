import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// var corsOptions = {
//   origin: "http://localhost:3000",
// };

// app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extented: true }));
app.use(express.urlencoded({ limit: "30mb", extented: true }));
app.use(cors());
// const MONGODB_URL = "mongodb://localhost:27017/tourdb";

app.use("/users", userRouter); //http://localhost:3000/users/signup
app.use("/tour", tourRouter);
app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});
const MONGODB_URL =
  "mongodb+srv://Hrishikesh:qqqqqqqq@cluster0.ajghbpd.mongodb.net/tour_db?retryWrites=true&w=majority";
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
