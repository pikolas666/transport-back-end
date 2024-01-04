import express from "express";
const router = express.Router();

import { GET_ALL_USERS, ADD_USER, LOGIN } from "../controller/user.js";

router.get("/users", GET_ALL_USERS);
router.post("/users", ADD_USER);
router.post("/users/login", LOGIN);

export default router;
