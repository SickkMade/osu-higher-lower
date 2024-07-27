const model = require('../models/loggedin.js')
const fs = require('fs').promises
const path = require('path')

module.exports = {
    getIndex: async (req, res) => {
        const access_token = req.cookies.access_token
        const id = await getRandomId()
        const data = await model.getTopBeatmapset(access_token, id)
        res.render('osu.ejs', {cover: data['covers']['cover@2x'], playcount: data['play_count'].toLocaleString(), title: data['title'], mapper: data['creator']})
    }
}

async function getRandomId(){
    try{
        const filePath = path.join(__dirname, '../mapIds.json')
        const data = await fs.readFile(filePath)
        const mapIds = JSON.parse(data);

        const randomNum = Math.floor(Math.random() * 1000)
        return mapIds['map_ids'][randomNum]
    } catch(e){
        console.error(e)
    }
    
}



//we need:
// cover@2x
// playcount
//title
//