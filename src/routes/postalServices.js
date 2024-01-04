import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import {
	GET_POSTAL_SERVICES,
	ADD_POSTAL_SERVICE,
} from "../controller/postalServices.js";

router.post("/postal-services", auth, ADD_POSTAL_SERVICE);
router.get("/postal-services", auth, GET_POSTAL_SERVICES);

export default router;
