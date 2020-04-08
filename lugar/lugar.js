const axios = require('axios')


const getLugarLatLng = async (dir) =>{

    const encodedUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': 'd4c3e514eemshdc01ba35ae132c7p1d6ea9jsn252ad12df129'}
      })
    
    const resp = await instance.get()
        
  
    if(resp.data.Results == 0){ //No es con === , es con ==
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0]

    const direccion = data.name,
          lat = data.lat,
          lng = data.lon

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}




