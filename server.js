const express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('<h1>Hey Hey! Welcome to the site!</h1>');
  res.send({
    name: 'Hans',
    likes: [
      'Flying',
      'shooting'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(8080, () => {
  console.log("Server is up on port 8080.");
});