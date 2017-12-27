const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/recipeManager',
{ useMongoClient: true })

mongoose.Promise = Promise
module.exports = mongoose
