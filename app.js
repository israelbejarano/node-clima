/*jshint esversion: 6 */
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const axios = require('axios');
const colors = require('colors');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await (lugar.getLugarLatLong(direccion));
        const temperatura = await (clima.getClima(coordenadas.lat, coordenadas.long));
        return `El clima de ${coordenadas.direccion} es de ${temperatura} C.`
    } catch (error) {
        return `No se pudo determinar el tiempo de ${direccion}.`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);