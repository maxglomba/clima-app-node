const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');
const colors = require('colors');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el Clima',
        demand: true
    }
}).argv;


const apiKey = 'bcf58f9ffb208b0828e0232b25a35088';
// const ubicacion = lugar.getLugarLatLng(argv.direccion).then(console.log)

// clima.getClima(ubicacion.lat, ubicacion.lng, apiKey).then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const climaUbicacion = await clima.getClima(coords.lat, coords.lng, apiKey);
        return `El clima de ${direccion.green} es: ${JSON.stringify(climaUbicacion).green}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`.red;
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)