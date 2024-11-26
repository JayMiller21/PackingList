const express = require('express')
const app = express()

app.get('/hello', function(req, res) {
  const data = { message: 'Hello from Express!' };
  res.json(data);
})

app.listen(3001, function() {
  console.log('App listening on port 3001')
})