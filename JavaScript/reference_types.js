// refernce types - objects, array, functions
// ---------------------------------------------------------------------------------------------------------

// what is object in js?
// object is a collection of key value pairs 

let course = {
    name: "reactjs",
    prize: 1000,
    rating: 4.5
};
console.log(course);

// output
// { name: 'reactjs', prize: 1000, rating: 4.5 }

// how to access the value of the object?
// using dot notation
console.log(course.name);
console.log(course.prize);
console.log(course.rating);

// output
// reactjs
// 1000
// 4.5

// or method 

// using bracket notation
console.log(course['name'])

// output
// reactjs

// showing the difference between reference type and primitive type 
// Primitives are copied by value
let a = 1;
let b = a;

a = 10;
console.log(a);
console.log(b);

// output 
// 10
// 1

// Objects are copied by reference
let x = { name: "ruchi" }
let y = x;

x.name = "abishek";
console.log(x)
console.log(y)
