const router = require('express').Router()
const { Cars } = require('../models/Index')

// Get all Cars
router.get('/', async (req, res) => {
    try {
    // Gets all informatiuon from our cars model/Database
        const carsCardsData = await Cars.findAll();
        // Maps that data in a way we can read it
        const carCards = carsCardsData.map((cars) => cars.get({plain: true}));
        // Renders this information using handlebars and make sure we are logged in
        // switch to render homepage when frontend is done
        // res.json(carCards)
        res.render('homepage', {carCards, loggedIn: req.session.loggedIn,})
        

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

router.get('/dashboard', (req, res) => {


    console.log(req.session)
    if(!req.session.loggedIn){
        res.render('login')
    } else { res.render('dashboard', { loggedIn: req.session.loggedIn})}
// Renders dashboard handlebars page
    
})

router.get('/upload', (req,res)=> res.render('uploadPage'))



module.exports = router;