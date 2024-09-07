// 6/9/24 sept
// **Arch. of node.js**
// client makes requests to a server, all the request are going to event queue and then event loop (pickups req from event queue )(request are accepted based on fifo principal ), 

// there are 2 types of pickup request 

// - blocking operations - syncronous task
// - non blocking operations asyncronous task

// event loop checks the req is any of the above two ?

// if it is non blocking then it will process then send the response to user

// if it is blocking then it goes to thread pool. every req is assigned an thread/worker once work is done and results the result 

// it is always best to have non blocking operations than blocking coz, in bocking if 5 workers are assigned, and 6th is waiting , worker are busy, then your website will go down.

const fs = require("fs");

// console.log("1")
// // blocking 
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);

// console.log("2")

// output 
// 1
// Abishek 4574785204572
// pooja 095495843092582
// 2
// ----------------------------------------------------------------------------
// non blocking
console.log("1")
fs.readFile("contact.txt", "utf-8", (err, result) => {
    console.log(result);
})
console.log("2")

// output
// 1
// 2
// Abishek 4574785204572
// pooja 095495843092582
// ----------------------------------------------------------

// The conclusion is that in Node.js, non-blocking operations like fs.readFile allow the program to continue executing other code while the file is being read in the background, ensuring efficient performance without waiting for I/O tasks to complete.

// In the blocking example, Node.js waits for the file reading operation to complete before moving on to the next line of code. This means the program stops and waits until the entire file is read before continuing execution.

// by default we have 4 thread/worker, we can extend it depends on the cpu we rent for server we buy
// eg. my cpu have 8 core then i make it to 8 threads (worng statement)

const os = require("os");
console.log(os.cpus().length);
// output 
// 20 
// i take my thread size max to 20