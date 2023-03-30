console.log("Variable & Constant");
let myVar = 123;
const myConst = "Hello, world!";

console.log("%d %s", myVar, myConst);
console.log();


console.log("Data Type");
let myNum = 1020;
let myStr = "Welcome";
let myBool = true;
let myNull = null;
let myUndef = undefined;
let myObj = {name: "John", age: 30};
let mySym = Symbol("mySymbol");

console.log(typeof myNum);
console.log(typeof myStr);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);
console.log(typeof myObj);
console.log(typeof mySym);
console.log();


console.log("Operator");
let x = 10, y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x === y);
console.log(x !== y);
console.log();

let a = true, b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);
console.log();


console.log("Conditional");
let score =85;

if (score >= 90) {
    console.log("You got an A.");
} else if (score >= 80) {
    console.log("You got a B.");
} else {
    console.log("You got a C.");
}
console.log();


console.log("Switch");
let season = "spring";

switch (season) {
    case "spring":
        console.log("Spring");
        break;
    case "summer":
        console.log("Summer");
        break;
    case "fall":
        console.log("Fall");
        break;
    case "winter":
        console.log("Winter");
        break;
    default:
        console.log("Unknown");
}
console.log();


console.log("Loop");
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum = " + sum);

while (sum > 0) {
    sum -= 10;
    console.log(sum);
}
console.log();


console.log("For each");
const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
    console.log(element);
});
console.log();


console.log("Function");
function add(a, b) {
    return a + b;
}

console.log(add(1, 6));
console.log();


console.log("Object");
let newStudent = {
    name: "Junseok",
    age: 21,
    id: "2020-12768"
};

console.log("My name is %s. I am %d years old. My student ID is %s.", newStudent.name, newStudent.age, newStudent.id);
console.log();


console.log("Array");
let animals = ["cat", "dog", "bird"];

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);