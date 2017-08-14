/**
 * Created by Nick on 7/28/2017.
 */

var names = ["Aaron", "Andy", "Bobby"];

//no arrow function
// names.forEach( function(name) {
//     console.log('forEach', name);
// });

//basic arrow function
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

//simplified arrow function
// names.forEach((name) => console.log(name));

//demonstrating what a arrow function returns;
// var returnMe = (arg) => arg+'!';
//console.log(returnMe('input'));

// IMPORTANT NOTE
// anonymous functions (1st one) have their own 'this' binding
// arrow functions inherit their parent's 'this' binding

// var person = {
//     name: 'NameName',
//     greet: function () {
//
//         //for example, this will return
//         //' says hello to Aaron', because "this.name" is not defined inside the function
//         names.forEach( function(name) {
//             console.log(this.name = ' says hello to ' + name)
//         });
//
//         //here, "this.name" uses the parent's "this" property
//         names.forEach((name) => {
//             console.log(this.name + ' says hello to ' + name)
//         });
//     }
// };
//
// person.greet();

//PRACTICE

//default
function add (a,b) {
    return a + b;
}

// using curly braces to specify return value
var addStatement = (a,b) => {
    return a + b;
}

// single-line use
var addExpression = (a,b) => a + b;

console.log( add (1,3) );
console.log( add (9,0) );
console.log( addStatement (1,3) );
console.log( addStatement (9,0) );
console.log( addExpression (1,3) );
console.log( addExpression (9,0) );