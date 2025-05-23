// Task 1: Declare and Use Variables
var studentName = "Khoa Le";
var studentAge = 31;
var isEnrolled = true;
console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);

// Task 2.1: Demonstrate Data Types (String, Number and Boolean)
let myName = "Khoa Le";
let myAge = 31;
console.log(`My name is ${myName} and I'm ${myAge} years old.`);


let student = true
if (student) {
    console.log('I am a student.');
} else {
    console.log('I am not a student.');
}

//Task 2.2: Array and Object
const car = {
    year: 2025,
    model: "Civic"
};
let colors = ['Black', 'White', 'Grey']
console.log(colors);
console.log(`Honda ${car.model} ${car.year} has the option of 3 colours: ${colors[0]}, ${colors[1]}, ${colors[2]}`);


//Task 3.1: Use Basic Operators (Arithmetic Operators)
let x = 10;
let y = 5;
let addition = x + y;
let subtract = x - y;
let multiply = x * y;
let divide = x / y;

let output1 = `
Let x = 10 and y = 5 then: 
Addition: ${x} + ${y} = ${addition}
Subtraction: ${x} - ${y} = ${subtract}
Multiplication: ${x} * ${y} = ${multiply}
Division: ${x} / ${y} = ${divide}
`;
console.log(output1);

//Task 3.2: Comparison Operators
let greater= x > y;
let less= x < y;
let equal= x===y;
let notEqual = x!==y; 
let output2 = `Greater than: ${x} > ${y}  ${greater}
Less than: ${x} < ${y}  ${less}
Equal to: ${x} === ${y}  ${equal} 
Not equal to: ${x} !== ${y}  ${notEqual}
`;
console.log(output2);

//Task 3.3: Logical Operators
let a = true;
let b = false;
let output3 = `Let a = true and b = false then:
AND (&&): ${a && b}
OR (||): ${a || b}
NOT (!): ${!a}
`;
console.log(output3);
