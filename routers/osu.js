const express = require('express')
const router = express.Router()
const osuController = require('../controllers/osu.js')

router.get('/', osuController.getIndex)

module.exports = router