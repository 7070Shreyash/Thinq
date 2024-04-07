import mongoose from "mongoose";

const quesSchema = mongoose.Schema(
  {
    userId : {
        type : String,
        required : true,
    },
    statement : {
        type : String,
        required : true,
    },
    answers : {
        type: [
            {
                userId : {
                    type : String,
                    required : true,
                },
                solution : {
                    type : String,
                    required : true,
                },
            }
        ],
        default: []
    }
  },
  { timestamps: true }
);
const Ques = mongoose.model("Ques", quesSchema);
export default Ques;
