const fs = require("fs");
const { request } = require("http");
// can use to interact with files 


// how to create a file and how to put data into it 
// synconous (blocking)
// fs.writeFileSync("./test.txt", "hey there");
// writes to a file, overwrites if file already exists


// asynconous (non balocking)
// fs.writeFile("./test.txt", "iam abishek", (err) => {});


// how to read a file from contact.txt
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

fs.readFile("./contact.txt", "utf-8", (err, result)=> {
    if(err) {
        console.log("error", err);
    }
    else{
        console.log(result);
    }
});

// what is the node arch. and blocking and non blocking request

// ----------------------------------------------
// i want the entries to be appended one after the other
fs.appendFileSync("./test.txt", 'pooja\n');
