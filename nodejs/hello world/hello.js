// console.log("fuck off");
// console.log(alert("hi"))  //will not work, dom related work cant be done.
// console.log(window) //will not work

// when you type node init will give decription, and will give the package.json - is a configaration file 
// "start": "node hello.js" u can crete like this in the json file and exit node from terminal and type npm run youtube ( this is used for scipting )
// -------------------------------------------------------------------------------------

// Modules 
const math = require("./math");
// function add(a,b){
//     return a+b;
// }
// now write this above thing in the Math.js
console.log(math.add(2,4));
console.log(math.sub(2,4));


// ------------------------------------------------
// we have lots of built in packages/ modules in node.js 
// const math = require("http"); http is used for making web servers 
// const math = require("fs"); file sys used for file handling 
// if u r giveing the package name as it is like fs, it seraches in the node directory but if u write ./ then it searches the packages in the current dir
