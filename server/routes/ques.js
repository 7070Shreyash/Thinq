import express from "express";
import { getQuestions, getQuestion, postQuestion, postSolution, deleteQuestion, deleteSolution } from "../controllers/ques.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/newQues/:id", verifyToken, postQuestion);
router.post("/newSolution/:id/:quesId", verifyToken, postSolution);

//DELETE
router.delete("/deleteQues/:id/:quesId", verifyUser, deleteQuestion);
router.delete("/deleteSolution/:id/:quesId", verifyUser, deleteSolution);

//GET
router.get("/", getQuestions);
router.get("/:quesId", getQuestion);

export default router;