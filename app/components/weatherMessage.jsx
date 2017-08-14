var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var temp = this.props.temp;
//         var location = this.props.location;
//          // also could have used "var {temp, location} = props;"
//
//         return (
//             <div>
//                 In {location} it is currently {temp} degrees Fahrenheit.
//             </div>
//         );
//     }
// });

//because we're just getting specifics from the props
// var WeatherMessage = (props) => {
//     var {temp, location} = props;

//we can split the props inside the variable declaration with ES6
var WeatherMessage = ( {temp, location} ) => {

    return (
        <div>
            In {location} it is currently {temp} degrees Fahrenheit.
        </div>
    );
};

module.exports = WeatherMessage;