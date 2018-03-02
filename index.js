var express = require('express')
var body = require('body-parser')
var app  = express()

var mySnake = {
  color: '#DFFF00',
  name: 'Shai Halud',
  head_url: 'http://cf.geekdo-images.com/images/pic1732684_t.png', // dune sandworm
  taunt: "yo let that spice flow",
  head_type: 'sand-worm',
  tail_type: 'pixel'
}

var moves = ['up', 'down', 'left', 'right']

// Handle GET
app.get('/', (req, res) => res.json(mySnake))

// Handle POST request to '/start'
app.post('/start', (req, res) => {
  console.log(req)
  res.json(mySnake)
})

// Handle POST request to '/move'
app.post('/move', (req, res) => {
  res.json({'move': moves[Math.floor(Math.random() * 4)]})
})

//Handle POST request to ''/end'
app.post('/end', (req, res) => {
  res.json()
})

var PORT = process.env.PORT
app.listen(4000, () => console.log('Snake app listening on port ${PORT}...'))
