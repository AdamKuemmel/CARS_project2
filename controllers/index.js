const router = require('express').Router()

const homeRoutes = require('./home-routes')
const apiRoutes = require('./api')
const userRoutes = require('./user-route')

router.use('/', homeRoutes)
router.use('/api', apiRoutes)
router.use('/login', userRoutes)

module.exports = router;