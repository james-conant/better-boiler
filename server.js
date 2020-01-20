const express = require('express')
const path = require('path')
const axios = require('axios')
const API_KEY = require('')
const app = express()
const port = 3000
const {connection} = require('./db/db.js')
// const = require('./db/db.js').connection

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/api/todaysimage', (req, res) => {
  console.log('hello from the server your doin great, now in the api call')
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then (data => {
    console.log(data)
  }).catch(err => console.error(err))
  .then(data => res.end())
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))