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

// Handle POST request to '/start'
app.post('/start', (req, res) => {
  console.log(req.body)
  res.json(mySnake)
  var theBoard = req
})

// Handle POST request to '/move'
app.post('/move', (req, res) => {

  var theGame = req.body
  var mySnake = theGame.you
  var otherSnakes[] = theGame.snakes.data
  var snakeHead = mySnake.body.data[0]
  var snakeTail = mySnake.body.data[mySnake.body.data.length
  var food = theGame.food.data[0]
  var move

  function invalidSpaces(){

  var invalidSpaces[]
  //Get the locations of all the enemy snakes
  for (let i=0; i<otherSnakes.length; i++){
    var enemySnake = otherSnakes[i]
    for (let j=0; j<enemySnake.body.data.length; j++) {
      takenSpaces.push(enemySnake.body.data[j])
    }
  }
  //Get the locations of our snake
  for (let i=0; i<mySnake.body.data.length; i++) {
    takenSpaces.push(mySnake.body.data[i])
  }
  //Get the edgespace of the board
  for (let i=0; i<theGame.width; i++){
    edgeSpace = {
      "object": "point",
      "x": i,
      "y": -1
    }
    takenSpaces.push(edgeSpace)
  }
  for (let i=0; i<theGame.width; i++){
    edgeSpace = {
      "object": "point",
      "x": i,
      "y": theGame.height
    }
    takenSpaces.push(edgeSpace)
  }  for (let i=0; i<theGame.height; i++){
      edgeSpace = {
        "object": "point",
        "x": -1,
        "y": i
      }
      takenSpaces.push(edgeSpace)
    }  for (let i=0; i<theGame.height; i++){
        edgeSpace = {
          "object": "point",
          "x": theGame.width,
          "y": i
        }
        takenSpaces.push(edgeSpace)
      }
    return invalidSpaces[]
  }

  console.log(invalidSpaces())

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
  console.log(req)
})

app.set('port', (process.env.PORT || 9001));

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'))
})
