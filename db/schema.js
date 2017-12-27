const mongoose = require('./connection')

const ComplimentSchema = new mongoose.Schema({
  compliment: String
  // description: String,
  // ingredients: String,
  // instructions: String
})

const Compliment = mongoose.model('Compliment', ComplimentSchema)

module.exports = Compliment
