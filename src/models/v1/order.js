import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
    },
    items:{
        type: [String],
        required: true,
    },
    invoice:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },

},{timestamps:{createdAt: true, updatedAt: true}});

const Order = mongoose.model('Order', orderSchema);

export default Order;
