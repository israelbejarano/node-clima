/*jshint esversion: 6 */
const axios = require('axios');


const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);

    const apiKey = 'your city geo-location apikey';

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': apiKey }
    });

    const resp = await (instance.get());
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;
    return {
        direccion,
        lat,
        long
    };
};

module.exports = {
    getLugarLatLong
};