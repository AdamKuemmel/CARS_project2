const router = require('express').Router()
const { Cars } = require('../models')


// Get all Cars
router.get('/', async (req, res) => {
    try {
    // Gets all informatiuon from our cars model/Database
        const carsCardsData = await Cars.findAll();
        // Maps that data in a way we can read it
        const carCards = carsCardsData.map((cars) => cars.get({plain: true}));
        // Renders this information using handlebars and make sure we are logged in
        res.render('homepage', carCards)


    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});