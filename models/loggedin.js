
module.exports = {
    getTopBeatmapset: async (access_token, id) => {
        const request = await fetch("https://osu.ppy.sh/api/v2/beatmapsets/"+id, { //{offset}
            headers:{
                'Authorization': `Bearer ${access_token}`
            }
        })
        const data = await request.json()
        return data
    }
}