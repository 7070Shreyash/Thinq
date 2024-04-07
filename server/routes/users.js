import express from "express";
import { updateUser, deleteUser, getUser } from "../controllers/users.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyToken, getUser);

export default router;