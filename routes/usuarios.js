var express = require('express')
var router = express.Router()
const db = require('../helpers/db')

router.get('/', (req, res, next) => {
    db.query('SELECT * FROM usuarios', (error, results, fields) => {
        if (error) throw error
        return res.json({ usuarios: results, error: false })
    })
})

module.exports = router;