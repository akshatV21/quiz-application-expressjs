const { default: mongoose } = require('mongoose')

const MONGO_CONNECTION_STRING =
  'mongodb+srv://akshat21:aku1985pika@cluster0.ew0oz.mongodb.net/?retryWrites=true&w=majority'

const connectToMongoDatabase = async () => {
  mongoose.set('strictQuery', false)
  await mongoose.connect(MONGO_CONNECTION_STRING)
}

module.exports = { connectToMongoDatabase }
