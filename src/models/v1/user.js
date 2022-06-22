import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(`${value} is not a valid email`);
            }
        }
    },
    password: {
        required: true,
        type: String,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error(`Enter a strong password`);
            }
        }
    },
    phone: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error(`Enter a valid phone number`);
            }
        }
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    occupation: {
        type:String,
    },
    eatingLifestyles: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Lifestyle',
    }
}, {timestamps: {createdAt: true, updatedAt: true}});

const User = mongoose.model('User', userSchema);

export default User;
