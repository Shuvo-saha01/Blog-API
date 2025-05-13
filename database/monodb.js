import mongoose from "mongoose";
import { URI } from "../env_variables/env.export.js";


if(!URI){
    throw new Error ("Please define your mongodb connection URI");
}


export const connectToDatabase = async() => {
    try {
        await mongoose.connect(URI)
        console.log("mongo db is connected");
    } catch (error) {
        console.log("error connecting to database", error);
    }
}