var React = require('react');

// var WeatherMessage = React.createClass({
//
//    render: function(location, temp){
//      var {location, temp} = this.props;
//      return(
//        <form>
//          <p>It's {temp} in {location}</p>
//
//        </form>
//      );
//    }
//
// });
var WeatherMessage = ({temp,location}) => {

  return(

      <h3 className="text-center">It's {temp} in {location}</h3>

  );

}
module.exports = WeatherMessage;
//openweathermap
