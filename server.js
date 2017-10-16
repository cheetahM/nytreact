// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

// Create Instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Serve up static assets
app.use(express.static('client/build'));

mongoose.Promise = Promise;

const db = process.env.MONGODB_URI || 'mongodb://localhost/nyt-react';

mongoose
  .connect(db)
  .then(() => console.log('connected to DB!'))
  .catch(err => console.log(err));

// Add routes, both API and view
app.use(routes);

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
