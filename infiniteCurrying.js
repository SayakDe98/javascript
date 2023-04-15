//Infinite Currying in JS
//Need to implement an add function which keeps adding number even if we pass infinite arguments

// Below is static implmentation:
function Add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(Add(1)(2)(3));


//Below is implementation of infinite currying
function add(a) {
    return function(b) {
        if(b) return add(a + b);//checks if b is there if not then returns the sum as a
        return a;
    }
}

console.log(add(1)(2)(3)(4)(5)());