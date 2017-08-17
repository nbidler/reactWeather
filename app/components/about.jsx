var React = require('react');

//original version
// var about = React.createClass({
//     render: function() {
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });

//stateless function
// var about = function (props){
//     return(
//         <h3>About Component</h3>
//     );
// };

// IMPORTANT LESSON
// YOU CAN ONLY REFACTOR THESE COMPONENTS LIKE THIS
// BECAUSE THEY ONLY DEFINE THAT RENDER METHOD AND DON'T MAINTAIN ANY STATE

//stateless function with arrow function
var about = (props) => {
    return(
        <div>
            <h3>About</h3>
            <p>Welcome the to the about page - the only thing it's about is itself</p>
        </div>
    )
};

module.exports = about;