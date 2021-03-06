const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./app/users');
const venues = require('./app/venues');
const reviews = require('./app/reviews');
const images = require('./app/images');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const run = async () => {
  await mongoose.connect(config.database, config.databaseOptions);

  app.use('/users', users);
  app.use('/venues', venues);
  app.use('/reviews', reviews);
  app.use('/images', images);

  app.listen(config.port, () => {
    console.log(`Server started on ${config.port}`);
  });
};

run().catch(error => {
  console.error(error);
});