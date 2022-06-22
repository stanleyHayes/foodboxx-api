import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    ingredients:{
        type: String,
        required: true,
    },
    instructions:{
        type: String,
        required: true,
    },
    time:{
        amount: {Number},
        unit: {String},
        required: true,
    },
    allergies:{
        type: String,
        required: true,
    },
    utensils:{
        name:{String},
        image:{String},
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
},{timestamps: {createdAt: true, updatedAt: true}});

const Recipe = mongoose.model('recipe', recipeSchema);

export default Recipe;
