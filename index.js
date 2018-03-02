var express = require('express')
var bodyParser = require('body-parser')
var app  = express()

app.use(bodyParser.json())

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
,
// Handle POST request to '/move'
app.post('/move', (req, res) => {
  res.json({'move': moves[Math.floor(Math.random() * 4)]})
})

//Handle POST request to ''/end'
app.post('/end', (req, res) => {
  res.json()
})

app.set('port', (process.env.PORT || 9001))

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'))
})
