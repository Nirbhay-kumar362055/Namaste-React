import React from "react";
import ReactDOM from "react-dom/client"; // --> /client is used to avoid the error of ReactDOM not found

//creating element and rendering react
var heading = React.createElement("h1", {id: "heading", class: "h1"}, "greetings from React");
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//creating nested elements and siblings.
/* 
    <div id="parent">
        <div id="child">
            <h1>Hello There!</h1>
            <p>I'm para</p>
        </div>
    </div>

    --To create siblings, just pass the children as an array
*/

const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "Hello There!"), React.createElement("p",{},"I'm para")]));
// root.render(parent); // root rendering is overwritten 
const secondRoot = ReactDOM.createRoot(document.getElementById("secondRoot"));
secondRoot.render(parent);

/* React.createElement() creates an object not HTML. While rendernig in DOM it becomes HTML*/

//creating complex structure
/*   <div id="parent">
        <div id="child">
            <h1>Hello There!</h1>
            <p>I'm para</p>
        </div>
        <div id="child">
            <h1>Hello There!</h1>
            <p>I'm para</p>
        </div>
    </div>
*/
const parent2 = React.createElement("div", {id:"parent2"},[
    React.createElement("div",{id:"child"}, [
        React.createElement("h1",{},"Hello There!"),
        React.createElement("p",{},"I'm para")
    ]),
    React.createElement("div", {id:"child"},[
        React.createElement("h1",{}, "Hello There!"),
        React.createElement("p",{},"I'm para")
    ])
]);
const thirdRoot = ReactDOM.createRoot(document.getElementById("thirdRoot"));
thirdRoot.render(parent2);