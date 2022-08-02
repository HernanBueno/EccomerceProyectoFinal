import mongoose, { Schema } from "mongoose";

const CartSchema = new Schema({
    userID:{
        type: ObjectId,
        required: true,
        ref: 'user'
    },
    products:[{productId:ObjectId, quantity:Number}],
    quantity:{
        type:Number,
        default: 1
    }, 
    productId:{
        type:ObjectId,
        ref: 'product'
    }
});
const modelo = mongoose.model('cart', CartSchema);
export default modelo;