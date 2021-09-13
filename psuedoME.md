# CARS_project2

USER EXPERIENCE
user will be able to sign up and login
check status of cars
post cars
delete cars
update car info

REQUIRED PAGES
home/login page
view your posts
view all posts
Form page

MODELS--what the user input must look like

    car model:
        id
        make
        model
        year
        color
        milage
        price
        images
        USED?NEW

    user model:
        id
        first
        last
        email
        username
        password
        car_id -----stored reference to an id in the cars table can be null since not all users will have a car
        phone#

PUBLIC--handles front end styling and front and JS

    login.js:
        login form handler with event listeners and api fetch(async functions)
        signup form handler with event listeners post request
        event listener on corresponding button to direct user to corresponding function

    logout.js
        logout async function returning user to the home page
        event listnener on logout button to direct JS to logout function

CONTROLLERS---responsible for handling the routes to the API(POST, GET )

    API FOLDER---this is where we will store the routes to the api
        user routes
            create a new user
            Login
            Logout
        car routes
            post new car
            Edit a car
            Delete a car
            view car


    homepage-routes
        GET all cars and display as cards
        LOGIN route
            redirects user to the login route declared in the API folder

    index
        supplies middleware to make requiring routes easier

UTILS DIRECTORY
middleware for easy use of things like date, time, UUID, password hashing

VIEWS FOLDER
LAYOUTS
one main.handlebars folder including head HTML(stylesheets, fonts, JS links, project title)
includes anyhting that will always be required in HTML file and we insert other handlebars files into this main layout
PARTIALS
html detail for a singular car card---multiple cards displayed on one page

    NO LOG HOMEPAGE
        all cars in Car table displayed
        when user clicks on view car will prompt them to login or signup
        if logged in brings them to singCar.handlebars

    YES LOG HOMEPAGE
          view all cars(homepage)
          view my cars(car_id reference)
          view liked cars



    SingleCar MAIN DISPLAY
        include more detaield description of car
        multiple pictures
        will display all details
        Bid option?
        message owner?

    LOGIN/LOGOUT handlebar page
        2 cards to collect login data or signup data

VIEWS--HANDLEBARS
MAIN
header and foot boiler plate
bootstrap link
font link
JS and CSS style links
nav
footer

    SIGNUP/SIGNIN
    2 cards
        LOGIN
            username
            password
        SIGNUP
            email
            username
            password
            first name
            last name
            PHone numnber


    USER DAHSBOARD
        view all
        my cars
        post cars
        liked cars

    DETAIL SINGLE CAR
        img
        make
        model
        year
        color
        milage
        price
        new/used
    POST PAGE
         img
        make
        model
        year
        color
        milage
        price
        new/used
    MY CARS
        single cards similar to view all cars, only to specific user

#$*#*$%##_$ICEBOX#$%&$#_$%
filter options

autopopulate data from a car api
