//It has relation with memory
//Js doesn't understand setTimeout, console.log(), browser apis, web apis local storage session storage, they have seperate execution
getName();//hoisted function where we are defining function later but calling earlier
console.log(a);//undefined. It goes to global execution context but doesn't recieve value because hasn't received a = 5
var a = 5;
//a would be not defined which is error if var a wasnt there
function getName() {
    console.log("technical suneja");
}
//the above function isn't executed hence it is stored in memory
//A global execution context is created when js code is executed then it goes to call stack, function is pushed then poped and then we get to see outputs
// test();
// getUser();//we get undefined when stored in variable
// const test = function getUser() {
//     console.log("User");
// } 
const test = () => console.log("User");