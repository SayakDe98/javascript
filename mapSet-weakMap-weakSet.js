//Map, set, weakSet, weakMap
"use strict";
const { inspect } = require('util');

//set contains only unique values
//We will use object constructor
console.log(new Set());

//In array we can have duplicate elements but it isn't possible in set
const myArray = [1, 2, 3, 4];
let obj = new Set(myArray);
console.log(obj);

console.log("size", obj.size);

obj.add(5);
console.log(obj);

//let's add a duplicate element and we will find it won't get added
obj.add(5);
console.log(obj);

obj.delete(5);
console.log(obj);//deletes 5 because we had only one 5

var obj1 = { name: "Ajay" };
obj.add(obj1);
console.log(obj);

console.log(obj.has(1));//checks if value is present in set. If yes returns true else false

for(let element of obj) {
    console.log(element);
}
obj.forEach((element) => {
    console.log(element);
});

obj.clear();//used to empty the set
console.log(obj);


//Map has key value pairs
let myMap = new Map([["a1",  "ajay"], ["a2", "vikas"]]);
console.log(myMap);

myMap.set("a2","ajay");//overrides value
console.log(myMap);

for(let [key, value] of myMap) {
    console.log(`key ${key}, value ${value}`);
}

myMap.forEach((value, key) => console.log(`key ${key}, value ${value}`));

myMap.delete("a2");//deletes a key value pair using key
console.log(myMap);

console.log(myMap.get("a2"));//will get undefined because we deleted a2

myMap.clear();//used to remove all key value pairs from map
console.log(myMap);

//weakSet -> We can store only object but we can't iterate over the object(s)
let ws = new WeakSet();
// console.log(ws);
// ws.add(1);//we can only store object not any other data type
console.log(inspect(ws, { showHidden: true }));

var obj2 = { "name": "tiger" };
var obj3 = {};

ws.add(obj2);
ws.add(obj3);
console.log(inspect(ws, { showHidden: true }));

console.log(ws.has(obj2));
console.log(ws.has(obj1));

//WeakMap -> object is the only Data type accepted  and can't iterate
let wm = new WeakMap();
console.log(inspect(wm, { showHidden: true }));

var obj1 = {"name": "ajay"};
var obj2 = {};
wm.set(obj1, "data 1");
wm.set(obj2, "data 2");
console.log(wm.has(obj1));

console.log(inspect(wm, { showHidden: true }));
