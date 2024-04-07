import Ques from "../models/Ques.js";
import User from "../models/User.js";

export const getQuestions = async (req,res,next)=>{
  try {
    const questions = await Ques.find();
    res.status(200).json(questions);
  } catch (err) {
    next(err);
  }
}

export const getQuestion = async (req,res,next)=>{
  try {
    const { quesId } = req.params;
    const question = await Ques.findById( quesId );
    res.status(200).json(question);
  } catch (err) {
    next(err);
  }
}

export const postQuestion = async (req,res,next) => {
  try {
      const { id } = req.params;
      const user = await User.findById(id);
      const newQues = new Ques({
        userId : id,
        ...req.body
      });
      await newQues.save();
      user.questionAsked += 1;
      await User.findByIdAndUpdate(
        id,
        { questionAsked : user.questionAsked },
      )
      res.status(200).send("Question has been created.");
  } catch (err) {
    next(err);
  }
};

export const postSolution = async(req, res, next) => {
  try {
      const { id , quesId } = req.params;
      const ques = await Ques.findById(quesId);
      const user = await User.findById(id);

      ques.answers.push({
        userId : id,
        ...req.body,
      })
      const updatedQuestion = await Ques.findByIdAndUpdate(
        quesId,
        { answers : ques.answers },
        { new: true }
      );

      user.reputation = Math.min(user.reputation + 25, 7000);
      await User.findByIdAndUpdate(
        id,
        { reputation : user.reputation },
      )
      res.status(200).json(updatedQuestion);
  } catch(err) {
    next(err);
  }
}

export const deleteQuestion = async(req,res,next) => {
  try { 
    const { id , quesId } = req.params;
    const user = await User.findById(id);
    await Ques.findByIdAndDelete(quesId);
    user.questionAsked -= 1;
    await User.findByIdAndUpdate(
      id,
      { questionAsked : user.questionAsked }
    );
    res.status(200).json("Question has been deleted.");
  } catch(err) {
    next(err);
  }
}

export const deleteSolution = async(req,res,next) => {
  try {
    const { id , quesId } = req.params;
    const user = await User.findById(id);
    const ques = await Ques.findById(quesId);
    const answers = ques.answers.filter((solution) => {
      return solution.userId !== id;
    })
    const updatedQuestion = await Ques.findByIdAndUpdate(
      quesId,
      {answers : answers },
      {new : true },
    );
    user.reputation = Math.max(1500, user.reputation - 25);
    await User.findByIdAndUpdate(
      id,
      { reputation : user.reputation },
    )
    res.status(200).json(updatedQuestion);
  } catch(err) {
    next(err);
  }
}

