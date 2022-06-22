import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
    name:{
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Lifestyle',
    },
    meal:{
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Meal',
    },
    description:{
        type: String,
        required: true,
    },
    numberOfPeople:{
        type: Number,
        required: true,
    }


}, {timestamps: {createdAt: true, updatedAt: true}});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
