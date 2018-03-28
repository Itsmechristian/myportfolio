const express = require('express')
    , router = express.Router()
    , url = require('url')
    , Product = require('../models/Products')
    , WeeklyProducts = require('../models/WeeklyProducts')
    , SalesProducts = require('../models/SaleProducts')

router.use((req, res, next) => {
  global.myUrl = url.format({
                    protocol: req.protocol,
                    host: req.get('host'),
                    })
  next()
})

router.get('/products', (req, res) => {
  Product.find().then(docs => {
    if(!docs.length) {
      res.json({message: 'No Products Were Found', status: 404})
    }
    else{
      products = docs.map(e => {
        return {
          id: e._id,
          productName: e.name,
          productDetails: e.details,
          productImages: myUrl + e.images,
          productPrice: parseFloat(e.price).toFixed(2),
        }
      })
      res.status(200).json({
        products
      })
    }
  })
})    

router.post('/new/products', (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.pricee,
    details: req.body.details,
    images: req.body.images,
  })

  newProduct.save().then(docs => {
    res.status(200).json({
      "message": "Succesfully Product Craeted"
    })
  }).catch(err => {
    res.json({
      err
    })
  })
})

router.get('/weeklyproducts', (req, res) => {
  WeeklyProducts.find()
  .then(docs => {
    if(!docs.length) {
      res.status(404).json({ message: 'No weekly products were found', status: 404})
    }
    else{
      res.status(200).json(docs.map(e => {
        let images = []
        for(i = 0; i < e.images.length; i++) {
          images.push(myUrl + e.images[i])
        }
        return {
          id: e._id,
          productName: e.name,
          productImages: images,
          productPrice: '£' + parseFloat(e.price).toFixed(2),
        }
      }))
    }
  })
})

router.post('/new/weeklyproducts', (req, res) => {
  const newWeeklyProducts = new WeeklyProducts({
    name: req.body.name,
    images: req.body.images,
    price: req.body.price
  })
  newWeeklyProducts.save()
  .then(docs => {
    res.status(200).json({
      message: 'Weekly Products Created'
    })
  })
})

router.get('/saleproducts', (req, res) => {
    SalesProducts.find()
    .then(docs => {
      if(!docs.length) {
        res.status(404).json({ message: 'No weekly products were found', status: 404})
      }
      else{
        res.status(200).json(docs.map(e => {
          return {
            id: e._id,
            productName: e.name,
            originalPrice: e.price.toFixed(2),
            percentOf: 20,
            discountedTo: parseInt(e.discountedTo).toFixed(2),
            image: myUrl + e.image
          }
        }))
      }
    })
})

router.post('/new/saleproducts', (req, res) => {
  const newSaleProduct = new SalesProducts({
    name: req.body.name,
    price: req.body.price,
    percentOf: req.body.percent,
    discountedTo: Math.round(req.body.price - ((req.body.percent / 100) * req.body.price)),
    image: req.body.image
  })
  newSaleProduct.save()
  .then(docs => {
    res.json({
      message: 'Created Succesfully'
    })
  })
})


module.exports = router;
