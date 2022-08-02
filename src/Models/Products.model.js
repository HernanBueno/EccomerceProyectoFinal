import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required:true
    }
});
const modelo = mongoose.model('product', ProductSchema);
export default modelo;