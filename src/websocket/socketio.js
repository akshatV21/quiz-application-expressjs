const socketio = require('socket.io')
const fs = require('fs/promises')
const app = require('../app.js')
const path = require('path')

const createSocketConnection = () => {
  const io = new socketio.Server(app, { cors: { origin: '*' } })

  io.on('connection', async socket => {
    const eventsFolderPath = path.join(__dirname + '/events')
    const eventFiles = await fs.readdir(eventsFolderPath)

    eventFiles.forEach(fileName => {
      const event = require(`./events/${fileName}`)
      socket.on(`${event.name}`, data => event.action(data, socket, io))
    })
  })
}

module.exports = createSocketConnection
