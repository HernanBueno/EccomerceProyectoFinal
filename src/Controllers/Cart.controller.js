import CartModel from '../Models/Carts.model.js'


//CREAR CARRITO 

function createCart(req, res){
    const newCart = req.body;
    const user = req.user.id
    const addcart = {
        userID:user,
        products:newCart
    }
    CartModel.create(addcart)
    .then(cart=> res.status(201).json({msg: "se creo exitosamente", cart: cart}))
    .catch(err=> res.json(err.message))
}
//AGREGAR PRODUCTOS A CARRITO por id de carrito
async function addProductsToCart (req, res){
    const newProduct = req.body;
    const id = req.params.id;
    const carrito= await CartModel.find({_id:id}).exec()
    CartModel.update({_id:id }, {$set:{products: [...carrito[0].products, newProduct]}})
    .then(_cart=> res.json({msg:"Se Agrego el producto al carrito"}))
    .catch(err=> res.json({msg: err.message}))
}
//BORRAR CARRITO POR ID de carrito
function deleteCart(req, res) {
    CartModel.findByIdAndDelete({_id:req.params.id})
    .then(_cart =>res.status(200).json("El carrito fue eliminado exitosamente..."))
    .catch(e=> res.status(500).json({msg:e.message})) ;
}



  //OBTENER EL CARRITO POR ID DE CARRITO con productos
function getCartByID(req, res) {
    const populate = { 
        path: 'products.productId'
    }
    const id = req.params.id
    CartModel.findOne({ _id:id }).populate(populate)
    .then(cart => res.status(200).json(cart))
    .catch(e=>res.status(500).json({msg:e.message}))
}

//se elimina producto con id de producto
async function deleteProductByid(req, res){
    const id = req.params.cartid
    const product = req.body.productId
    let cart = await CartModel.findOne({_id:id})
    cart = cart.products.filter(p=> p.productId != product)
    console.log(cart)
    CartModel.update({_id:id }, {$set:{products: cart}})
    .then(_c => res.status(200).json({msg:"Se elimino producto correctamente"}))
    .catch(e=>res.json({msg:e.message}))
}

//OBTENER TODOS LOS CARRITOS
function getAllCarts(_req, res) {
    CartModel.find()
    .then(carts=>res.status(200).json(carts))
    .catch(e=>res.status(500).json({msg:e.message}))
}


export{
    createCart,
    addProductsToCart,
    deleteCart,
    getCartByID,
    getAllCarts,
    deleteProductByid
}