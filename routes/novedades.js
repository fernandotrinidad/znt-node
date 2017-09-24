var express = require('express')
var router = express.Router()
const db = require('../helpers/db')

router.get ('/', (req, res, next) => {
  let sql = 'SELECT * FROM contenidos WHERE id_categoria = 1 AND publicado = 1'
  db.query ( sql, (error, results, fields) => {
  if (error) throw error
    return res.json({ novedades: results, error: false })
  })
})

module.exports = router;
