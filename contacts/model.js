const db = require('../data/db-config')

module.exports = {
    getAll,
    newUser
}

function getAll() {
    return db('contact_list').select('name', 'phone').orderBy('name')
}

function newUser(name, phone) {
    return db('contact_list').insert({name: name, phone: phone});
}