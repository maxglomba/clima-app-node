const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let location = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${location}`,
        headers: { "x-rapidapi-key": "0cd1c1563emsh8f3edd7b44725bcp1dc968jsn05f3ff9b0803" }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`.red);
    }
    const data = resp.data.Results[0];
    const ubicacion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        ubicacion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}