const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const populate = require('./database/populate');


const app = express();
app.use(express.json());
app.use(routes);


mongoose.connect(
  'mongodb+srv://mongo:mongo@cluster0-ls7ew.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
);


const databaseConnection = mongoose.connection;

databaseConnection.on('error', console.error.bind(console, 'database connection error:'));

databaseConnection.once('open', () => {
  console.log('Database connected.');
});

databaseConnection.on('connected', async () => {
  databaseConnection.db.collection('pokemons').countDocuments(async (err, count) => {
    if(count == 0) {
      console.log('Database empty, populating with pokemons.');
      populate().then(console.log('Populate completed'));

    } else {
      console.log(`Database loaded ${count} pokemons`);
    }
  });
});




app.listen(3333, () => {
  console.log(' Server started on port 3333');
});
