const router = require('express').Router()


const homeRoutes = require('./home-routes')
const apiRoutes = require('./api')
const userRoutes = require('./user-route');
const { application } = require('express');


router.use('/', homeRoutes)
router.use('/api', apiRoutes)
router.use('/users', userRoutes)
// router.use((req, res) => {
//     res.status(404).json({message: 'That route does not exist'}).send()
// })

module.exports = router;