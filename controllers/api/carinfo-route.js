const router = require('express').Router();
const { Cars } = require('../../models')
const { Op } = require("sequelize")

router.get('/', async (req, res) => {

    try {
        const carsData = await Cars.findAll()

        res.status(200).json(carsData)
    } catch (err) {
        res.status(500).json(err)
    }
})                                                                   

router.get('/search', async (req, res) => {
    try {
        const specialCarsData = await Cars.findAll({
            where: {
                [Op.or]: [{ id: req.body.id }, 
                    { make: req.body.car_make }, 
                    { model: req.body.car_model },
                    { year: req.body.car_year}],
            }})

         if(!specialCarsData) {
             res.status(400).json({message: 'That car does not exist!'})
             return
         } 
         
         res.status(200).json(specialCarsData)
    } catch (err) {
        res.status(500).json(err)
    }
})


//Create a car
router.post('/', async (req, res) => {
    try {
        const carCreateData = await Cars.create({
            car_make: req.body.car_make,
            car_model: req.body.car_model,
            car_year: req.body.car_model,
            car_color: req.body.car_model,
            car_milage: req.body.car_milage,
            car_price: req.body.car_price,
            new_used: req.body.new_used,
            user_id: req.body.user_id
        })

        res.status(200).json(carCreateData)
    } catch (err) {
        res.status(400).json(err)
    }

})



//Delete a car
router.delete('/:id', async (req, res) => {

try {
    const carData = await Cars.destroy({
        where: {
            id: req.paramas.id,
        }
    })

    if(!carData) {
        res.status(404).json({ message: "No car was found with that id!"})
        return
    }

    res.status(200).json(carData)
} catch (err) {
    res.status(500).json(err)
}
})



module.exports = router;
