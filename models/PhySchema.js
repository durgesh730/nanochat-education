import mongoose from "mongoose";
const { Schema } = mongoose;

const PhysicsSchema = new Schema({
    questions: {
        type: Array,
        default: []
    },
    answers: {
        type: Array,
        default: []
    },
    createAt:
    {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Physics", PhysicsSchema);