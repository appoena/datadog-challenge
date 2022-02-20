// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init()
const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

const CheckoutController = require('./controllers/checkoutController')
server.post('/checkout', CheckoutController.Register)
{
  const database = require('./database')

  try {
    database.sync()
  } catch (error) {
    console.log('ERROR', error)
  }
}

server.listen(3333, () => console.log('Server is running on port 3333'))
