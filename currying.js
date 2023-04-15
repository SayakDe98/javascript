//normal function

function Addition(a, b, c) {
    return a + b + c;
}

const result = Addition(1, 2, 3);
console.log(result);


//closure
function Addition(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
const result1 = Addition(2);
const data = result1(4);
const data1 = data(7); 
console.log(data1);

//currying
const res = Addition(2)(4)(7);
console.log(res);

const userObject = {
    name: "Sayak",
    age: 24
}

function userInfo(obj) {
    return function(userInfo) {
        return obj[userInfo];
    }
}

const res1 = userInfo(userObject);
console.log(res1('name'));
console.log(res1('age'));

//two liner currying
const currMult = a => b => c => a * b * c;
const multiply = (a, b, c) => currMult(a) (b) (c);
console.log(multiply(2, 3, 4));