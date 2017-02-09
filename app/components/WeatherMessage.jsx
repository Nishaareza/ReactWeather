var React = require('react');

var WeatherMessage = React.createClass({

   render: function(location, temp){
     var {location, temp} = this.props;
     return(
       <form>
         <p>It's {temp} in {location}</p>

       </form>
     );
   }

});
module.exports = WeatherMessage;
//openweathermap
