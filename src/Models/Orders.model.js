import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
    userID:{
        type: ObjectId,
        required: true,
        ref: 'user'
    },
    date:{
        type:Date,
        default:Date.now
    },
    products:[{
        type:ObjectId,

    }]
});
const modelo = mongoose.model('order', OrderSchema);
export default modelo;