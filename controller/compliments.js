// import { error } from 'util';

const express = require('express')
// const db = require('../db/connection')
const Compliment = require('../db/schema')
const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('You See Me')
// })
router.get('/', (req, res) => {
  Compliment.find({})
    .then((compliments) => {
      res.render('compliments', {
        compliments: compliments})
    .catch((err) => {
      console.log(err)
    })
    })
})

router.post('/', (req, res) => {
  Compliment.create(req.body.Compliment)
    .then(Compliment => {
      res.redirect(`/compliments/${Compliment.compliment}`)
    })
})

module.exports = router
