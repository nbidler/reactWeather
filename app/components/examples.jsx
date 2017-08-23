var React = require('react');
var {Link} = require('react-router');

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
            <h1 className="text-center">Examples</h1>
            <p>Here are some example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Denver">Denver, CO</Link>
                    <Link to="/?location=Los Angeles">Los Angeles, CA</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = examples;