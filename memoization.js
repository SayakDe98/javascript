//Implementing Memoization in JavaScript
//Memoization is an optimization technique that can be used to reduce
//time-consuming calculations by saving previous input to something called cache and 
//returning the result from it.

const calc = (n) => {
    let sum = 0;
    for( let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.time();
// console.log(calc(5));
// console.timeEnd();

//Now let's write memoized function
//First time it will take time but next time we get cache result
const memoize = (fun) => {
    let cache = {};
    return function(...args) {
        const n = args[0];
        if(n in cache) {
            console.log("cache");
            return cache[n];
        } else {
            console.log("calculating first time");
           let result = fun(n);
           cache[n] = result;
           return result;
        }
    }
}

// console.time();
const efficient = memoize(calc);
console.log(efficient(5));
// console.timeEnd();
console.time();
// const efficient = memoize(calc);
console.log(efficient(5));
console.timeEnd();