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
            <h1 className="text-center page-title">About</h1>
            <p>This is just a small project to query a <a href="http://openweathermap.org/api">free weather API</a> to give temperature information.</p>
            <p>The <i>reason</i> I did this was to get my feet wet using <a href="https://facebook.github.io/react/">ReactJS</a>, because (at time of writing)
                it is one of the big three javascript libraries; hopefully knowing all three will let me net stable employment and enough cash to
                live on my own ( <a href="http://www.nbidler.com">hit me up</a> if you know of web developer jobs, whether or not they're somewhere
                cheap to live).</p>
            <p>Special thanks to:</p>
            <ul>
                <li>
                    <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">The Complete React Web App Developer Course</a>
                </li>
                <li>
                    <a href="http://openweathermap.org/api">OpenWeatherMap.org for not charging to use their API</a>
                </li>
                <li>
                    <a href="https://facebook.github.io/react">The developers of React</a>
                </li>
            </ul>
        </div>
    )
};

module.exports = about;