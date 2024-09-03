console.log("Problem 1");

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

console.log("$$$$$");

console.log("Problem 2");

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); is not defined 
console.log(otherName); 

console.log("$$$$$");

console.log("Problem 3");

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);  // there is no hashed pass
//<div id="copy-toolbar-container" style="cursor: pointer; position: absolute; top: 5px; right: 5px; padding: 0px 3px; background: rgba(224, 224, 224, 0.2); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; color: rgb(187, 187, 187); border-radius: 0.5em; font-size: 0.8em;"><span id="copy-toolbar">copy</span></div>
  // Unexpected token '<'
console.log("$$$$$");

console.log("problem 4 ");

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);  // no
console.log(first == third);  // yes

console.log("%%%%%%");

console.log("problem 5");
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

console.log("$$$$$");
