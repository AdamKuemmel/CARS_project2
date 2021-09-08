const router = require('express').Router()

const carRoute = require('./carinfo-route')

router.use('/cars', carRoute)

module.exports = router;