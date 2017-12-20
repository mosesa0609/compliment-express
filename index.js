const express = require('express')
const parser = require('body-parser')
// const Random = require('random-js')
// const compliments = require('./db/connection')
const shuffle = require('shuffle-array')
// let randomColor = require('randomcolor')
// let color = randomColor({
//   luminosity: 'random',
//   hue: 'random'
// })
const app = express()

const compliments = [
  "I like helping the odd person now and then.",
  "No wipe = Happy People #ForTheHorde",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock!",
  "The Force is strong with you!",
  "Do you know the Muffin-Man?"
]

const colors = ['#FFBF00', '#0080FF','#01DF3A','#FF0080']

// const engine = Random.engines.nativeMath
// function randomCompliment () {
//   Random.shuffle(engine, compliments)
// }

// function randomColor () {
//   Random.shuffle(engine, colors.length)
// }

app.set('port', process.env.PORT || 4001)
app.set('view engine', 'hbs')

app.use(parser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', {compliment: shuffle.pick(compliments), color: shuffle.pick(colors)})
})
// app.get('/:numberOfBottles?', (req, res) => {
//   let bottles = req.params.numberOfBottles || 99
//   let next = bottles - 1
//   res.render('index', {bottles, next})
// })
app.listen(app.get('port'), () => {
  console.log('For the Horde!')
})
