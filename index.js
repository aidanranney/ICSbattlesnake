var express = require('express')
var app  = express()

//Response data

var gameStart = {
game_id: 1,
}

var mySnake = {
  color: '#DFFF00',
  name: 'Shai Halud',
  head_url: 'http://cf.geekdo-images.com/images/pic1732684_t.png', // dune sandworm
  taunt: "Let the spice flow",
  head_type: 'sand-worm',
  tail_type: 'pixel'
}

var moveData = {
  move: 'left',
  taunt: 'The sleeper has awakened!'
}

// Handle GET
app.get('/', (req, res) => {
  console.log("response logged")
})

// Handle POST request to '/start'
app.post('/start', (req, res) => {
  res.json(data)
})

// Handle POST request to '/move'
app.post('/move', (req, res) => {
  res.json({'move': 'up'})
})
