const http = require('http')
const express = require('express')
const cors = require('cors')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const api = require('./api')

const app = express()
const appServer = http.createServer(app)

// middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// api
app.use('/api', api)

module.exports = { app, appServer }
