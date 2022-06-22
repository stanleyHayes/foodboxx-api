import mongoose from "mongoose";
const lifestyleSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },

},{timestamps: {createdAt: true, updatedAt: true}});

const Lifestyle = mongoose.model('Lifestyle', lifestyleSchema);

export default Lifestyle;
