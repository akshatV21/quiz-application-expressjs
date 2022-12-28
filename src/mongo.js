const { default: mongoose } = require('mongoose')

const MONGO_CONNECTION_STRING = ''

const connectToMongoDatabase = async () => {
  await mongoose.connect(MONGO_CONNECTION_STRING)
}

module.exports = { connectToMongoDatabase }
