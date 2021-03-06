var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9e7ff3db187a5bbd37bfa4fb903c19b3&units=imperial';

module.exports = {
   getTemp: function(location){
     //9e7ff3db187a5bbd37bfa4fb903c19b3
     var encodedLocation = encodeURIComponent(location);
     var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

     return axios.get(requestUrl).then(function(res){
       debugger;
       if(res.data.cod && res.data.message){
         throw new Error(res.data.message);
          }
          else{
           return res.data.main.temp;
         }
       },
     function(err){
       throw new Error(err.response.data.message);
     });
   }
}
