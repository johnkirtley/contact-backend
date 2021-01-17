const express = require('express')
const cors = require('cors')

const contactRouter = require('../contacts/contact_router')

const server = express()

server.use(cors())
server.use(express.json())

server.use('/user', contactRouter)

server.get('/', (req, res) => {
    res.status(201).json({message: 'API RUNNING'})
})

module.exports = server