var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var errorModal = require('errorModal');

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

        this.setState({
            isLoading:true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(
            function(data){
                self.setState({
                    location: data.name,
                    temp: data.main.temp,
                    isLoading: false
                });
            },
            function(e){
                self.setState({
                    isLoading: false,
                    errorMessage: e.message
                });
                // alert(e);
            }
        )
    },

    render: function() {
        // var stateTemp = this.state.temp;
        // var stateLocation = this.state.location;

        //instructor solution - which is neat and I did not think to try
        var{isLoading, temp, location, errorMessage} = this.state;


        function renderMessage (){
            if (isLoading){
                return <h3 className="text-center">Fetching data...</h3>
            }
            else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <errorModal/>
                )
            }
        }

        return(
        <div>
            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {/*to render only under certain conditions, a function declared inside Render can be passed -
                its return statement should be the intended message to display.
                for example, the line below will be shown differently based on the function's return statement*/}
            {/*<WeatherMessage location={location} temp={temp}/>*/}
            {renderMessage()}
            {renderError()}
        </div>
        );
    }
});

module.exports = weather;