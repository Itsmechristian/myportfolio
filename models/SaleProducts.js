const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const SaleProducts = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    discountedTo: Number,
    percentOf: Number,
    image: {
        type: String,
        required: [true, 'Image is required']
    }
})

module.exports = mongoose.model('saleproducts', SaleProducts)
