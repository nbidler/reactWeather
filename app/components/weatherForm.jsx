var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        //prevent default action, i.e. reloading whole page
        e.preventDefault();

        //fetch location from form
        var location = this.refs.location.value;

        //check if location is valid
        if(location.length > 0){
            //set form to empty
            this.refs.location.value = '';
            //pass input to function
            this.props.onSearch(location);
        }

    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Enter City Name" ref="location"/><br/>
                    <input className="button expanded hollow" type="submit" value="Get Weather"/>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;