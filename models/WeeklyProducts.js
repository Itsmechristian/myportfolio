const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const WeeklyProducts = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  images: {
    type: Array,
    required: [true, 'Images is required']
  }
})

module.exports = mongoose.model('weeklyproducts', WeeklyProducts)