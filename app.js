const express = require('express')
const app = express()

const port = 8080

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('*', function (req, res) {
  res.send('404 | Page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})