//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

var tylerFunction = isTyler(name) {
  if (name === "Tyler") {
    return true;
  } else {
    return false;
  }
}

// or

function isTyler(name) {
  if (name === "Tyler" || name === "tyler") {
    return true;
  } else {
    return false;
  }
}

// or


function isTyler(name) {
  return (name === "Tyler" || name === "tyler");
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
  var userName = prompt("What's your name?");
  return userName;
}
 var yourName = getName();
 alert(yourName);

// or

function getName() {
  return prompt("What's your name?");
  // return userName;
}
 var yourName = getName();
 alert(yourName);




//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
  var a = getName();
  return alert("Welcome " + getName);
}

var hi = welcome();
hi();

// correct answer:

function welcome() {
  var name = getName();

  alert("Welcome " + name);
}

welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

  // Parameters: The place holders/variable used to declare the function
  // Arguments: What is passed through the function


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here



//Next Problem



//Create a function called myName that returns your name

  //Code Here

function myName() {
  return "Marco";
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var user = myName;

//Now alert the result of invoking newMyName

alert(user());

// another way of my own - Teacher's(Jared Stark) answer below *********************

function myName(a) {
  return a;
}
//Now save the function definition of myName into a new variable called newMyName
  //Code Here
var user = myName;
//Now alert the result of invoking newMyName
alert(user("Marco"));

// Teacher (Jared Stark) answer

// see my 1st version for correct answer






//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
  return function() {
    return "Marco";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.
  //Code Here

  var innerFn = outerFn();

//Now invoke innerFn.

innerFn();

// Teacher(Jared Stark) answer

function outer () {
  return function () {
    return "Marco";
  }
}

var inner = outer(); // inner value = the annonymous function inside the "outer" function

// Below: Playing around.
/*
function outer () {
  return function a (x) {
    return a( alert(x));
  }
}

var inner = outer(4);
*/



// Closure example:
function welcomer(greeting) {
  return function (name) {
    alert(greeting + " " + name);
  }
}

var englishWelcomer = welcomer("Welcome");
var spanishWelcomer = welcomer("Bienvenido");

englishWelcomer("Jared");
englishWelcomer("Frank");
spanishWelcomer("Isaac");
