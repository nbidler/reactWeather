var React = require('react');

// var examples = React.createClass({
//     render: function() {
//         return(
//             <h3>Examples Component</h3>
//         );
//     }
// });

var examples = (props) => {
    return(
        <div>
            <h3>Examples Component!</h3>
            <p>Welcome the to the examples page</p>
        </div>
    )
};

module.exports = examples;