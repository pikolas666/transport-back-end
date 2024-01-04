import express from "express";
const app = express();
import cookieParser from "cookie-parser";
app.use(cookieParser());
import postalServiceRouter from "./src/routes/postalServices.js";
import courierRouter from "./src/routes/courier.js";
import userRouter from "./src/routes/user.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
import cors from "cors";
app.use(cors());
// import auth from './middleware/auth.js';
// app.use(auth);

// import casual from 'casual';

mongoose

	.connect(process.env.DB_CONNECTION)
	.then(() => console.log("Connected to DB!"))
	.catch((err) => {
		console.log("ERROR:", err);
	});

app.use(postalServiceRouter);
app.use(courierRouter);
app.use(userRouter);
app.use((req, res) => {
	return res.status(404).json({ response: "Endpoint does not exist" });
});

app.listen(process.env.PORT, () => {
	console.log(`App started on port ${process.env.PORT}`);
});
