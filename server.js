'use-strict'

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')

server.listen(process.env.PORT || 3165)

app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


// let players = {
//   'O': '',
//   'X': ''
// }

io.on('connection', (socket) => {
  console.log(socket.id)
  // socket.on('player', p)
})
