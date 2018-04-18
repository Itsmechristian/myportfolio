const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const KidsProducts = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    }
})     

module.exports = mongoose.model('kidsproducts', KidsProducts)