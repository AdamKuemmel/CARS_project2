const router = require('express').Router()
const { Cars, User} = require('../models')

// Route to reach dashboard
router.get('/', (req, res) => {

    
// Renders dashboard handlebars page
    res.render('dashboard')
})

// 
router.get('/myCars', async (req, res) => {

    const myCarData = await Cars.findAll({
        where: {
            user_id: req.session.username.id
        }
    })
    const mycarCards = myCarData.map((cars) => cars.get({plain: true}));

    console.log(mycarCards)
    res.end();
})

module.exports = router; 