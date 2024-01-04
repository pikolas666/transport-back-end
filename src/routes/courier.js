import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import { GET_COURIERS, ADD_COURIER } from "../controller/courier.js";

router.post("/couriers", auth, ADD_COURIER);
router.get("/couriers", auth, GET_COURIERS);

export default router;
