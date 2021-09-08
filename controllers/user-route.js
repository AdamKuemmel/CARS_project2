const router = require('express').Router();

const { User } = require('../models');


// Creates Our user
router.post('/', async (req, res) => {
    try {
        // Creates User with all the require information
        const dbUserCreate = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            phone_number: req.body.phone_number
        })

        // Logs the user in
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserCreate)
        })
    } catch(err) {
        // hopefully this works but if the the username is unqiue to someone already on the platform then the user will be proimtped with an error code will appear. hopefully this works 
         if(err == JSON(SequelizeUniqueConstraintError)) {
        res.status(400).json('That username already exists')
    } else {
        console.log(err)
        res.status(500).json(err)
    }
}
})

// Login
router.post('/login',  async (req, res) => {
try {
    // finds user with email or username
    const dbUserData = await User.findOne({
        where: {
            username: req.body.username,
            email: req.body.email,
        }
    });

    // checks to see if there is a user with that email or username, if not a json message is displayed
    if(!dbUserData) {
        res.status(400).json({message: 'Incorrect email or password. Please try again!'})
        return
    }

    /// uses hooks in our models to compare if the user passwords is the same as the one created. We are using bycrypt
    const validPassword = await dbUserData.checkpassword(req.body.password)

    // if the response returns false then they are presented with an error code
    if(!validPassword) {
        res.status(400).json({message: 'Incorrect email or password. Please try again!'})
    }

    // if validpassword returns true then the user is logged in
    req.session.save(() => {
        req.session.loggedIn = true;
        console.log("You've sucessfully logged in!")
        req.session.cookie
    })

    
    res.status(200).json({ user: dbUserData, message: "You are now logged in!"})

} catch (err) {
    res.status(500).json(err)    
}

})


// logs the user out
router.post('/logout', (req, res) => {
    // if the user is logged in then the user will be loged out
    if(req.session.loggedIn){
        res.session.destroy(() => {
            res.status(204).end();
        })
        //otherwise terminate anyways
    } else {
        res.status(404).end()
    }


})

module.exports = router;