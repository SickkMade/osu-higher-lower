require("dotenv").config();

module.exports = {
    getOsu: async () => {
        try{
            const response = await fetch("https://osu.ppy.sh/api/v2/wiki/en/Welcome", {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log(data)
            return data

        } catch(e){
            error.log(e)
        }
    },
    getAuthCode: async() => { //this gets authorization code
        const url = new URL(
            "https://osu.ppy.sh/oauth/authorize"
        );
        
        const params = {
            "client_id": process.env.CLIENTID,
            "redirect_uri": "http://localhost:8000/callback",
            "response_type": "code",
            "scope": "public identify",
            "state": "randomval",
        };
        Object.keys(params)
            .forEach(key => url.searchParams.append(key, params[key]));
        return url
    },
}