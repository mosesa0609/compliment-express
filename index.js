const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const methodOver = require('method-override')
const shuffle = require('shuffle-array')
const compliments = require('./controller/compliments')
const app = express()

const complimentsList = [
  "I like helping the odd person now and then.",
  "No wipe = Happy People! #ForTheHorde",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock!",
  "The Force is strong with you!",
  "Do you know the Muffin-Man?"
]
const colors = ['#FFBF00', '#0080FF','#01DF3A','#FF0080']

app.set('port', process.env.PORT || 6009)
app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))

app.use(parser.json()) //handles json post requests
app.use(parser.urlencoded({ extended: true })) // handles form submissions
app.use('/compliments', compliments)
app.use(methodOver('_method'))

app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout'
}))

app.listen(app.get('port'), () => {
  console.log('For the Horde!')
})

app.get('/', (req, res) => {
  res.render('index', {complimentsList: shuffle.pick(complimentsList), color: shuffle.pick(colors)})
})
app.get('/:personName', (req, res) => {
  let name = req.params.personName
  res.render('index', {name: name, complimentsList: shuffle.pick(complimentsList), color: shuffle.pick(colors)})
})
