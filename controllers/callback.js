const model = require('../models/callback.js')

module.exports = {
    redirect: async (req, res) => {
        const authenticationToken = await model.getAuth(req.query.code)

        res.cookie('access_token', authenticationToken.access_token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });

        res.redirect('/loggedin')
    }
}