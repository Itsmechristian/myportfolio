'use strict'

require('dotenv').config()

const express = require('express')
    , exphbs = require('express-handlebars')
    , path = require('path')
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , cors = require('cors')
    , app = express()
     
app.use(cors())

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  "auth": {
    "authSource": "admin"
  },
  "user": `${process.env.DB_USERNAME}`,
  "pass": `${process.env.DB_PASSWORD}`
})
.then((result => console.log('Connected to mongoDB')))
.catch((error => console.log(error)))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
  res.render('body',
   {
    title: 'Welcome シ',
    skills: [
      {
      title: 'Adobe XD',
      percentWidth: 90 - 20,
      percentage: 90
      },
      {
      title: 'HTML',
      percentWidth: 90 - 20,
      percentage: 90
      },
      {
      title: 'CSS',
      percentWidth: 90 - 20,
      percentage: 90
      },
      {
      title: 'JavaScript',
      percentWidth: 80 - 20,
      percentage: 80
      },
      {
      title: 'jQuery',
      percentWidth: 80 - 20,
      percentage: 80
      },
      {
      title: 'React',
      percentWidth: 70 - 20,
      percentage: 70
      },
      {
      title: 'Node.js',
      percentWidth: 60 - 20,
      percentage: 60
      },
      ]
  })
})
//Api routing

const kamaShop = require('./api/kamaShop')


app.use('/api', kamaShop, (req, res) => {
  res.header('Content-Type', 'application/json');
})


const port = 5050;
app.listen(port, console.log(`Connected to ${port}`))