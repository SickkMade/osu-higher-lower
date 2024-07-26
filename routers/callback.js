const express = require('express')
const router = express.Router()
const controller = require('../controllers/callback.js')

router.get('/', controller.redirect)

module.exports = router