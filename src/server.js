const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect(
  'mongodb+srv://mongo:mongo@cluster0-ls7ew.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => {
  console.log('database connected.');
});

app.listen(3333, () => {
  console.log(' Server started on port 3333');
});
