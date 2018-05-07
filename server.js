'use strict'

require('dotenv').config()

const express = require('express')
    , exphbs = require('express-handlebars')
    , path = require('path')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , sgMail = require('@sendgrid/mail')
    , app = express()
     

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
 res.render('body')
})
app.post('/send', (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'contact@itsmechristian.co.uk',
    from: 'sayhi@itsmechristian.co.uk',
    subject: (req.body.company) ? req.body.company : 'none',
    text: `
      My name is: ${req.body.name},
      My email is: ${req.body.email},
      Message: ${req.body.message}
    `,
  };
  sgMail.send(msg).then(response => {
    res.redirect('/')
  });
})


app.get('*',function(req, res, next) {
  res.redirect('/')
})
//Api routing


const port = 3000;
app.listen(port, console.log(`Connected to ${port}`))