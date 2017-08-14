var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

// arrow function cannot be used on Weather like it can be for About
// because it defines all kinds of custom methods and it maintains a state

var weather = React.createClass({
    getInitialState:function(){
        return{
            isLoading: false
        }
    },

    handleSearch: function(location){
        //dummy data
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
        var self = this;

        this.setState({isLoading:true});

        openWeatherMap.getTemp(location).then(
            function(data){
                self.setState({
                    location: data.name,
                    temp: data.main.temp,
                    isLoading: false
                });
            },
            function(errorMessage){
                self.setState({
                    isLoading: false
                });
                alert(errorMessage);
            }
        )
    },

    render: function() {
        // var stateTemp = this.state.temp;
        // var stateLocation = this.state.location;

        //instructor solution - which is neat and I did not think to try
        var{isLoading, temp, location} = this.state;


        function renderMessage (){
            if (isLoading){
                return <h3>Fetching data...</h3>
            }
            else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        return(
        <div>
            <h3>Weather Component</h3>
            <WeatherForm onSearch={this.handleSearch}/>
            {/*to render only under certain conditions, a function declared inside Render can be passed -
                its return statement should be the intended message to display.
                for example, the line below will be shown differently based on the function's return statement*/}
            {/*<WeatherMessage location={location} temp={temp}/>*/}
            {renderMessage()}
        </div>
        );
    }
});

module.exports = weather;