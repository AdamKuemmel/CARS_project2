const router = require('./carinfo-route').Router()

const carRoute = require('./carinfo-route')

router.use('/car', carRoute )

module.exports = router;