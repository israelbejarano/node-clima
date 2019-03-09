/*jshint esversion: 6 */
const axios = require('axios');

const getClima = async(lat, long) => {
    const apiKey = 'your openweather map apikey';
    const resp = await (axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`));
    return resp.data.main.temp;
};

module.exports = { getClima };