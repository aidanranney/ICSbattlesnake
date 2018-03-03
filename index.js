var express = require('express')
var bodyParser = require('body-parser')
var app  = express()

app.use(bodyParser.json())

var mySnake = {
  color: '#a87008',
  name: 'Shai Halud',
  head_url: 'http://cf.geekdo-images.com/images/pic1732684_t.png', // dune sandworm
  taunt: "yo let that spice flow",
  head_type: 'sand-worm',
  tail_type: 'pixel'
}

// Handle GET
app.get('/', (req, res) => res('<img src="https://monsterlegacy.files.wordpress.com/2014/04/sandwormcropped.jpg"></img>'))

// Handle POST request to '/start'
app.post('/start', (req, res) => {
  console.log(req.body)
  res.json(mySnake)
})

// Handle POST request to '/move'
app.post('/move', (req, res) => {

  var theGame = req.body
  var mySnake = theGame.you
  var snakeHead = mySnake.body.data[0]
  var food = theGame.food.data[0]

  var move

  if (snakeHead.x - food.x == 0) {
       if (snakeHead.y - food.y > 0) {
         move =  'up'
       } else {
         move =  'down'
       }
  } else {
      if (snakeHead.x - food.x > 0) {
           move =  'left'
        } else {
          move =  'right'
        }
      }

  res.json({
    'move': move,
    'taunt': 'waazzzzzupppppp'
  })
})

//Handle POST request to ''/end'
app.post('/end', (req, res) => {
  res.json()
})

app.set('port', (process.env.PORT || 9001))

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'))
})
