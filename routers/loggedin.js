const express = require('express')
const router = express.Router()
const controller = require('../controllers/loggedin.js')

router.get('/', controller.getIndex)

module.exports = router