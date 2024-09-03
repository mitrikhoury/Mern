
console.log("example 1");
console.log(hello);                                   
var hello = 'world';  //  undefined 

console.log("*****");
console.log("example 2");

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);  // will print the local var
}
console.log("*****");

console.log("example 3");
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // print the var outside the function if we call the function will print the two var
console.log("*****");

console.log("example 4");

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}  // will print the two var
console.log("*****");
console.log("example 5");

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food); // the mean is not function 
console.log("*****");

console.log("example 6");

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
    var genre = "r&b";
console.log(genre); // te first var is undefined and print the (rock ,r&b )

console.log("*****");

console.log("example 7");

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); // will print all the global and the local
console.log("*****");

console.log("example 8");

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
console.log("*****");// Assignment to constant variable.