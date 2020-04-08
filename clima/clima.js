const axios = require('axios')

const getClima = async (lat,lng) =>{

    const apikey = 'e81ffea4feac9d1898644b1171c9dc29'
    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=metric`)

    return resp.data.main.temp
}


module.exports = {
    getClima
}