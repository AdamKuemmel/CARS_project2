const router = require('express').Router();
const { Cars, User } = require('../../models')
const { Op } = require("sequelize")

// Gets all cars
router.get('/', async (req, res) => {

    try {
        const carsData = await Cars.findAll()

        res.status(200).json(carsData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {

    console.log(req.session)
        try {
            const singleCarQuery = await Cars.findByPk(req.params.id)
            const user_idQuery = await User.findByPk(singleCarQuery.user_id)

            
            
            const singleCar = singleCarQuery.get({plain: true});
            const user_id = user_idQuery.get({plain: true});

            console.log(user_id)
           
            res.render('single-car', {singleCar, user_id, LoggedIn: req.session.LoggedIn})

        } catch (err) {
            res.status(500).json(err)
        }
    // }
})

//Gets cars based on user search
router.get('/search', async (req, res) => {
    try {
        const specialCarsData = await Cars.findAll({
            where: {
                [Op.and]: req.body
            }})

         if(!specialCarsData || specialCarsData.length === 0) {
             res.status(400).json({message: 'That car does not exist!'})
             return
         } 
         
         res.status(200).json(specialCarsData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})




//Create a car
router.post("/", async (req, res) => {
    
    console.log('hi')
    try {


        const createCar = await Cars.create({
        car_make: req.body.carMake,
        car_model: req.body.carModel,
        car_year: req.body.carYear,
        car_color: req.body.carColor,
        car_milage: req.body.carMileage,
        car_price: req.body.carPrice,
        new_used: req.body.carNew,
        user_id: req.session.username.id,
        img_url: req.body.Img

    })



    console.log(createCar)
    res.status(200).json(createCar)

} catch (err) {
    console.log(err)
     res.status(400).json(err)   

}


})

//get update car
router.get('/update/:id', async (req, res) => {
    try {
        const updateCarQuery = await Cars.findByPk(req.params.id)
        const updatedCar = updateCarQuery.get({plain: true});
       

        res.render('updateCar', {updatedCar, LoggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err)
        res.status(400)
    }

})

//Update a car
router.put('/', async (req, res) => {
    console.log("request was made")
    try {
      const updateCar = await Cars.update({ 
            car_model: req.body.carModel,
            car_make: req.body.carMake,
            car_year: req.body.carYear,
            car_color: req.body.carColor,
            car_milage: req.body.carMileage,
            car_price: req.body.carPrice,
            new_used: req.body.carNew,
            img_url: req.body.Img
        }, 
          {
        where: {
           id: req.body.id
      },
    })

    if(!updateCar){
        res.status(404).json({message: "no Car with this id!"})
    }

    console.log(updateCar)
    res.status(200).json(updateCar)

    } catch (err) {
        res.status(400).json(err)
    }

})


//Delete a car
router.delete('/:id', async (req, res) => {

try {
    const carData = await Cars.destroy({
        where: {
            id: req.params.id,
        }
    })

    if(!carData) {
        res.status(404).json({ message: "No car was found with that id!"})
        return
    }

    res.render('dashboard')
    console.log('sucessfully deleted car!')    
} catch (err) {
    res.status(500).json(err)
}
})



module.exports = router;
