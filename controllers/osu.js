const models = require("../models/osu.js")

module.exports = {
    getIndex: async (req, res) => {
        const redirectHref = await models.getAuthCode()
        res.redirect(redirectHref.href)
    }
}