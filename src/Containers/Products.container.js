import {ProductModel} from '../Models/Products.model.js'

function getProducts(){
            ProductModel.find()
            .then(product => {return product})
            .catch(e => console.log(e.message))
}