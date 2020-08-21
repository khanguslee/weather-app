const express = require('express');
const routes = require('./routes');
const { connectDb } = require('./models');

const app = express();

const PORT = process.env.PORT || 5000;

// Add middleware to parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', routes);

// Host the build folder of the client application
app.use(express.static('../client/build'));

connectDb().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
});
