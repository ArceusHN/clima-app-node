
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv


const getInfo = async (direccion) =>{


    try {
        const respCiudad = await lugar.getLugarLatLng(direccion)
    
        const respClima = await clima.getClima(respCiudad.lat,respCiudad.lng)

        return `El clima de ${argv.direccion} es de ${respClima}`
        
    } catch (error) {
        console.log(`No se pudo determinar el clima de ${direccion}`)
    }
    
}


// lugar.getLugarLatLng(argv.direccion)
//                     .then(console.log)
//                     .catch(console.log)


getInfo(argv.direccion)
                    .then(console.log)
                    .catch(console.log)


