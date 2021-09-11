const router = require('express').Router()
const { Cars } = require('../models')

// Route to reach dashboard
router.get('/', (req, res) => {

    
// Renders dashboard handlebars page
    res.render('dashboard')
})

// Renders logged in users cars
router.get('/myCars', async (req, res) => {

    const myCarData = await Cars.findAll({
        where: {
            user_id: req.session.username.id
        }
    })
    const mycarCards = myCarData.map((cars) => cars.get({plain: true}));

    console.log(mycarCards)
    res.render('myCars', {mycarCards} )
})

router.get('/postcar', async (req, res) => {


})

module.exports = router; 