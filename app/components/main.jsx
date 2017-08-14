var React = require('react');
var Nav = require('Nav');

// var main = React.createClass({
//     render: function() {
//         return(
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var main = (props) => {
    return(
        <div>
            <Nav/>
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = main;