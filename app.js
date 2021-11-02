var a = 5
var b = 6
function add (a, b) {
    return a + b;
};
var result = add(a,b);
console.log(result);

function sub (a,b) {
    return a - b;
};
var result = sub(a,b);
console.log(result);

function multiply(a,b) {
    return a * b;
};
var result = multiply(a,b);
console.log(result);

function divide (a,b) {
    return a / b;
};
var result = divide(a,b);
console.log(result);

var sum = (a,b) => (a + b);
console.log(sum(a,b));

var result = (a,b) => (a - b);
console.log(result(a,b));

var result = (a,b) => (a * b);
console.log(result(a,b));

var result = (a,b) => (a / b);
console.log(result(a,b));



var sum = (a,b) => (a + b);
console.log(sum(a,b));