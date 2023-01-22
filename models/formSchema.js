import mongoose from "mongoose";
const { Schema } = mongoose;

const formSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        default: ''
    },
    DOB: {
        type: String,
        default: ''
    },
    AIQRank: {
        type: String,
        required: true
    },
    CRank: {
        type: String,
        default: ''
    },
    phonenumber: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    choice1: {
        type: String,
        default: ''
    },
    choice2: {
        type: String,
        default: ''
    },
    choice3: {
        type: String,
        default: ''
    },
    choice4: {
        type: String,
        default: ''
    },
    question: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("form", formSchema);