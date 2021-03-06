var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading : false,
    }
  },
  handleSearch: function(location){
    var that = this;
    debugger;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });

    },function(e){
           that.setState({
           isLoading: false,
           errorMessage:e.message
      });
      that.setState({location: ''});
    });
      },
  render: function(){
    var{isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;

      } else if (temp && location){
        return <WeatherMessage location={location}  temp={temp}/>;
      }
    }

    function renderError(){
       if(typeof errorMessage === 'string'){
         return(
           <ErrorModal message={errorMessage}/>
         )
       }
    }

     return(
      <div>
       <h1 className="text-center page-title">Get weather</h1>
       <WeatherForm onSearch={this.handleSearch}/>
       {renderMessage()}
       {renderError()}
      </div>
     )
   }
});
module.exports = Weather;
