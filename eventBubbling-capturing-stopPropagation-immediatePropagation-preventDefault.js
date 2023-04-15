//Event Bubbling & Capturing
//Stop Propagation, Immediate Propagation & Prevent Default

var div = document.querySelector("div");
var button = document.querySelector("button");

// div.addEventListener("click", () => console.log("div"));
// button.addEventListener("click", () => console.log("button"));

//if we add this file name in src of script in index.html and we click on anything inside div then we get to see div written in console.
//This is event bubbling.
//As we clicked on button hence that event gets propagated to its parent which is div and body.

//first button gets consoled then div even though we wrote div first
//The above was event bubbling which goes from child to parent.

//Now we will see event capturing, which goes from parent to child.
// div.addEventListener("click", () => console.log("div"), true);
// button.addEventListener("click", () => console.log("button"), true);


//Now let's see stop propagation
//We saw we added an event listener on div but if we click on button we get to see this event is being listened for button as well. If we don't want that then we need stop propagation

// button.addEventListener("click", (event) => { 
//     event.stopPropagation();
//     console.log("button");
// });//now we won't see div

//immediate propagation:
button.addEventListener("click", (event) => { 
    console.log("button");
});//now we won't see div
button.addEventListener("click", (event) => { 
    event.stopImmediatePropagation();//for stopping multiple listeners at same time
    console.log("button1");
});//now we won't see div

//prevent default:
var anchor = document.querySelector("a");

anchor.addEventListener("click", (event) => {
    event.preventDefault();//it wont refresh page now
    console.log("a");
} );