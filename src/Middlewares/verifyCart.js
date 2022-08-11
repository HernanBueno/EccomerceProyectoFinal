import CartModel from "../Models/Carts.model.js"


async function verifyCart(req, res, next) {
    const user = req.user.id 
    const existCart = await CartModel.findOne({userID:user})
     if(!existCart){
    CartModel.create({userID:user, products:[{productId: req.body.productId}]})
    .then(_c =>res.json({msg: 'se creo carrito y se agrego producto'}))
    .catch(e=> res.json({msg:e.message}))
    }else{
        next()
    }
}

export{
    verifyCart
}