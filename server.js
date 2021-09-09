const express = require("express");
const sequelize = require("./config/connection");
const models = require("./models");
<<<<<<< HEAD
const routes = require("./controllers/index")
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
=======
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
// const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
>>>>>>> origin

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD

=======
// Set up sessions with cookies
>>>>>>> origin
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

<<<<<<< HEAD
app.use(session(sess))
=======
app.use(session(sess));

//create engine with helpers
// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
>>>>>>> origin

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
