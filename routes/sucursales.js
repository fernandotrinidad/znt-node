var express = require('express')
var router = express.Router()
const db = require('../helpers/db')

router.get('/', (req, res, next) => {
    //res.send('respond with a resource');
    db.query('SELECT * FROM sucursales', (error, results, fields) => {
        if (error) throw error
        return res.json({ sucursales: results, error: false })
    })
})

module.exports = router;
