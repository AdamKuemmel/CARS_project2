const router = require('express').Router()
const { Cars } = require('../models/index')


// Renders logged in users cars
router.get('/myCars', async (req, res) => {
 console.log(req.session)
    const myCarData = await Cars.findAll({
        where: {
            user_id: req.session.username.id
        }
    })
    const mycarCards = myCarData.map((cars) => cars.get({plain: true}));

    console.log(mycarCards)
    res.render('myCars', {mycarCards, loggedIn: req.session.loggedIn} )
})

router.get('/postcar', async (req, res) => {

    res.render('postCar', {loggedIn: req.session.loggedIn})
})

module.exports = router; 