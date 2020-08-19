const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

routes(app);

// Add middleware to parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Host the build folder of the client application
app.use(express.static('../client/build'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
