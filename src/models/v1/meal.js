import mongoose from "mongoose";
import subscription from "./subscription.js";

const mealSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    recipe:{
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Recipe',
    },
    image:{
        type: String,
        required: true,
    },
    eatingLifestyle:{
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Lifestyle',
    },
    description:{
        type: String,
        required: true,
    },
    ingredients:{
        type: [String],
        required: true,
    },
    exclusions:{
        type: String,
        required: true,
    }

},{timestamps: {createdAt: true, updatedAt: true}});

const Meal = mongoose.model('User',mealSchema);

export default Meal;
