const express = require('express')
const Model = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Model.getAll()
    .then((response) => {
        res.status(201).json({contacts: response})
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const {name, phone} = req.body

    Model.newUser(name, phone)
    .then(response => {
        res.status(201).json({message: `${name} added to contacts`})
    })
    .catch(err => console.log(err))
})

module.exports = router