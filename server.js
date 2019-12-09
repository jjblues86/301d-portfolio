'use strict';
const express = require('express');

//App
const app = express();
app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('hello')
})

app.use('*', (request, response) => {
  response.status(400).send('sorry that didnt work');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT} 3000`));
