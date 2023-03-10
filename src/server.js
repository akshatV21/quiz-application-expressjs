const app = require('./app')
const { connectToMongoDatabase } = require('./mongo')

const PORT = process.env.PORT || 8080

const startServer = async () => {
  try {
    await connectToMongoDatabase()
    app.listen(PORT, () => console.log(`Listening to requests: ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}
startServer()
