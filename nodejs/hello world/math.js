
function add(a,b){
    return a+b;
}

module.exports = add;
// module.exports = "abishek"
// in the math value is = to the abishek, means that is been exported

// we split our code into diff File
// here i can write my mathmatical fn 

function sub(a,b){
    return a-b;
}

module.exports = {
    add,
    sub,
}
