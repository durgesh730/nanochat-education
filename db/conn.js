const DB = 'mongodb+srv://Durgesh:Durgesh02042001@cluster0.skc6gmq.mongodb.net/?retryWrites=true&w=majority';

import mongoose from "mongoose";

mongoose.set('strictQuery', true);
export default async function connect(){
    mongoose.connect(DB)
    console.log("Database Connected")
}