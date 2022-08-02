import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
    email:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    text:[{
        type:String
    }]
});
const modelo = mongoose.model('message', MessageSchema);
export default modelo;