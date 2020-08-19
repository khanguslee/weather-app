const express = require('express');

const app = express();
const server = require('http').createServer(app);

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('../client/build'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
