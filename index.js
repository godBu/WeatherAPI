// npm i node-fetch
const fetch = require('node-fetch');
const fs = require('fs');
const APPID = 'ebf52f9e0d4f6e129914eb11e713212d';
const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=${APPID}`;

const getWeather = async () => {
    let data = await fetch(url);
    let jsonData = await data.json();
    //fs.writeFileSync('data.json', jsonData)
    //console.log(await data.json());
    console.log(jsonData);
}
/*const getWeather = async() => {
    let data = await fetch(url);
    console.log(await data);
}*/

getWeather();