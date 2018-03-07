'use strict'
  
const express = require('express')
    , exphbs = require('express-handlebars')
    , path = require('path')
    , app = express()


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

const port = 5050;
app.listen(port, console.log(`Connected to ${port}`))