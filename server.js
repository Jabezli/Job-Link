// const path = require("path");
// const express = require("express");
// const session = require("express-session");
// const routes = require("./controllers");
// // const helpers = require("./utils/helpers");

// const sequelize = require("./config/connection");

// // Create a new sequelize store using the express-session package
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({});

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// // Add express-session and store as Express.js middleware
// app.use(session(sess));

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });
const express = require('express');
const session = require('express-session')
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');



const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret:'Butter stick Coraline',
  resave: false,
  saveUnitialized: false,
}

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
//force is to drop DB
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening${PORT}`));
});

