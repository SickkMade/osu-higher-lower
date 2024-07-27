const models = require("../models/osu.js")

module.exports = {
    getIndex: async (req, res) => {
        
        if(!req.cookies.access_token){
            const redirectHref = await models.getAuthCode()
            res.redirect(redirectHref.href)
        } else {
            res.redirect('/loggedin')
        }
    }
}