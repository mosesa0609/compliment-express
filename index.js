const express = require('express')
const parser = require('body-parser')
const shuffle = require('shuffle-array')

const app = express()

const compliments = [
  "I like helping the odd person now and then.",
  "No wipe = Happy People! #ForTheHorde",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock!",
  "The Force is strong with you!",
  "Do you know the Muffin-Man?"
]

const colors = ['#FFBF00', '#0080FF','#01DF3A','#FF0080']

app.set('port', process.env.PORT || 4001)
app.set('view engine', 'hbs')

app.use(parser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', {compliment: shuffle.pick(compliments), color: shuffle.pick(colors)})
})
app.get('/:nameOfPerson', (req, res) => {
  let name = req.params.nameOfPerson || 'Hey!'
  res.render('index', {name: name, compliment: shuffle.pick(compliments), color: shuffle.pick(colors)})
})
app.listen(app.get('port'), () => {
  console.log('For the Horde!')
})
