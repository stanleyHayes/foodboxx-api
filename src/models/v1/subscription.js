import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    numberOfPeople:{
        type: Number,
        required: true,
    },
    eatingLifestyle:{
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Lifestyle',
    }

},{timestamps: {createdAt: true, updatedAt: true}});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
