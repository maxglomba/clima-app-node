const axios = require('axios');


const getClima = async(lat, lng, appId) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`
    });

    const resp = await instance.get();

    if (resp.length === 0) {
        throw new Error(`No hay resultados para esa latitud y longitud`.red);
    }
    const data = resp.data.main;
    const temp = data.temp;
    const temp_max = data.temp_max;
    const temp_min = data.temp_min;
    const presion = data.pressure;
    const humedad = data.humidity;

    return {
        temp,
        temp_max,
        temp_min,
        presion,
        humedad
    }

}

module.exports = {
    getClima
}