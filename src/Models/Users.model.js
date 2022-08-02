import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    }
});
const modelo = mongoose.model('user', UserSchema);
export default modelo;