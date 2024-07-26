module.exports = {
    getAuth: async (auth_code) => { //trades user authorization code for acess token that lets you access api
        const response = await fetch("https://osu.ppy.sh/oauth/token", {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', //is this nessisary?
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({ //what is body?
                client_id: process.env.CLIENTID,
                client_secret: process.env.SECRET,
                code: auth_code,
                grant_type: 'authorization_code',
                redirect_uri:"http://localhost:8000/callback",
                scope: 'public'
            })
        });



        const data = await response.json()
        return data
    }
}