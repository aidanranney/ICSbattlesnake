var express = require('express')
var bodyParser = require('body-parser')
var app  = express()

app.use(bodyParser.json())

const mySnake = {
  color: '#a87008',
  name: 'Shai Halud',
  head_url: 'http://cf.geekdo-images.com/images/pic1732684_t.png', // dune sandworm
  taunt: "yo let that spice flow",
  head_type: 'sand-worm',
  tail_type: 'pixel'
}

// Handle POST request to '/start'
app.post('/start', (req, res) => {
  console.log(req.game)
  res.json(mySnake)
})


// Handle POST request to '/move'
app.post('/move', (req, res) => {

  const theGame = req.board
  const mySnake = theGame.you
  const otherSnakes = theGame.snakes
  const snakeHead = mySnake.body[0]
  const food = theGame.food
  let up = {
    y: snakeHead.y-1,
    x: snakeHead.x,
    object: 'point'
  }
  let down = {
    y: snakeHead.y+1,
    x: snakeHead.x,
    object: 'point'
  }
  let left = {
    y: snakeHead.y,
    x: snakeHead.x-1,
    object: 'point'
  }
  let right = {
    y: snakeHead.y,
    x: snakeHead.x+1,
    object: 'point'
  }

  function invalidSpaces() {

    var takenSpaces = []
    //Get the locations of all the enemy snakes
    for (let i=0; i<otherSnakes.length; i++){
      var enemySnake = otherSnakes[i]
      for (let j=0; j<enemySnake.body.length; j++) {
        takenSpaces.push(enemySnake.body[j])
      }
    }
    //Get the locations of our snake
    for (let i=0; i<mySnake.body.length; i++) {
      takenSpaces.push(mySnake.body[i])
    }
    //Get the edgespace of the board
    //top
    for (let i=0; i<theGame.width; i++){
      edgeSpace = {
        y: -1,
        x: i,
        object: 'point'
      }
      takenSpaces.push(edgeSpace)
    }
    //bottom
    for (let i=0; i<theGame.width; i++){
      edgeSpace = {
        y: theGame.height,
        x: i,
        object: 'point'
      }
      takenSpaces.push(edgeSpace)
    }
    //left
    for (let i=0; i<theGame.height; i++){
        edgeSpace = {
          y: i,
          x: -1,
          object: 'point'
        }
        takenSpaces.push(edgeSpace)
      }  for (let i=0; i<theGame.height; i++){
          edgeSpace = {
            y: i,
            x: theGame.width,
            object: 'point'
          }
          takenSpaces.push(edgeSpace)
        }

      return takenSpaces
    }

  var takenSpaces = invalidSpaces()
  function moveUp() {
        for (let i = 0; i < takenSpaces.length; i++) {
            if (JSON.stringify(up) == JSON.stringify(takenSpaces[i])){
                return false
            }
        }
        return true
    }
  function moveDown() {
         for (let i = 0; i < takenSpaces.length; i++) {
            if (JSON.stringify(down) == JSON.stringify(takenSpaces[i])){
                return false
            }
          }
            return true
      }
  function moveLeft() {
         for (let i = 0; i < takenSpaces.length; i++) {
            if (JSON.stringify(left) == JSON.stringify(takenSpaces[i])){
                return false
            }
        }
          return true
    }
  function moveRight() {
         for (let i = 0; i < takenSpaces.length; i++) {
            if (JSON.stringify(right) == JSON.stringify(takenSpaces[i])){
                return false
            }
        }
        return true
    }
  function movement(){
    while (mySnake.health>(theGame.height+theGame.width)) {
      if (moveUp()){
           return 'up'
       } else if(moveDown()){
          return 'down'
      } else if (moveLeft()) {
          return 'left'
      } else if (moveRight()) {
          return 'right'
      }
    }
    if (snakeHead.x - food.x == 0) {
         if (snakeHead.y - food.y > 0) {
           if(moveUp()){
             return 'up'
           }
         } else {
           if (moveDown()){
             return 'down'
           }
         }
    } else {
        if (snakeHead.x - food.x > 0) {
             if (moveLeft()){
               return 'left'
             }
          } else {
            if (moveRight()){
              return 'right'
            }
          }
        }
  }


  let move = movement()

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
