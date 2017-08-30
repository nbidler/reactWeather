var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=311df9d93a9e85c53d6b462e05465f1a&units=imperial';

module.exports = {
    //take location from input
    getTemp: function(location) {

        //encode location input to OpenWeather standard
        var encodedLocation = encodeURIComponent(location);

        //create requestURL
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        //send out request, return promise
        return axios.get(requestURL).then(
            //response case success
            function(response){
                if (response.data.cod && response.data.message){
                    throw new Error(response.data.message);
                }
                else{
                    return response.data;
                }
            },
            //response failed
            function(response){
                throw new Error(response.message);
            }
        );
    }
};