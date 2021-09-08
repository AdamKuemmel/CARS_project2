const router = require('express').Router();
const { Cars } = require('../../models')
const { Op } = require("sequelize")

router.get('/', (req, res) => {

    try {
        const carsData = await Cars.findAll()

        res.status(200).json(carsData)
    } catch (err) {
        res.status(500).json(err)
    }
})                                                                   

router.get('/search', (req, res) => {
    try {
        const specialCarsData = await Cars.findAll({
            where: {
                [Op.or]: [{ id: req.body.id }, 
                    { make: req.body.car_make }, 
                    { model: req.body.car_model }
                ],
            }
        })
    } catch (err) {

    }
})




module.exports = router;
