//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer();

//Once you do that, invoke inner.
  //Code Here

  inner();





//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var calling = callFriend();

calling("435-215-9248");

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

  function makeCounter() {
    var counter = 0;
    return function () {
      counter++;
      return counter;
    }
  }

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

function outerFunction(anyFunction) {
  var hasBeenRun = false;
  function inner() {
    if (hasBeenRun) {
    return "STOP";
  } else {
    hasBeenRun = true;
    return anyFunction();
    }

  }
  return inner;
}

function myNameFunc() {
  return "Marco!"
}

var callingOuterFunction = outerFunction(myNameFunc);

console.log(callingOuterFunction());
console.log(callingOuterFunction());
console.log(callingOuterFunction());



// ** Mark's answer
  // var someFunction = function(anotherFunction){
  //   var count = 0
  //   var newFunction = function(){
  //     if (count == 0){
  //       count++
  //       return anotherFunction();
  //     } else {
  //       return 'you have already invoked this function'
  //     }
  //
  //   }
  //   return newFunction;
  // }
  //
  // var sayHi = function(){
  //   console.log('hi')
  // }

  //Code Here

  // *** Failed attempts***
//   function myNameFunc() {
//     return "My name is Slim Shady!!!"
//   }
//
//   myNameFunc();
//
// function funcCaller(yourFunc) {
//   return function () {
//     yourFunc;
//   }
//   // return a;
// }
// funcCaller(myNameFunc);
// funcCaller(myNameFunc());
//
// var c = funcCaller(myNameFunc);
// var d = funcCaller(myNameFunc());
// var e = funcCaller();
// var f = funcCaller;
//
// c;
// d;
// c();
// d();
//
//
//
//
// var myFunction = function () {
//   return "hi";
// }
//
//
// var outerFunction = function (yourFunction) {
//   var counter = 0;
//   var functionInner = function () {
//     if (counter === 0) {
//       counter++;
//       return yourFunction;
//     } else {
//       return "Already done";
//     }
//   }
//   return functionInner;
// }
//
//
// var functionInvoke = outerFunction();
// functionInvoke(myFunction);
//
//
//
//





//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
/*
function fnCounter(aFunction, n) {
  var counter = 0;
        console.log(counter);
  if (counter < n) {
     function count () {
      counter++;
      console.log(counter);
      return aFunction();
      console.log(counter);
    }
    } else {
      return "STOP";
    }
    return count;
  }///*/



function fnCounter(aFunction, n) {
  var counter = 0;
        console.log(counter);
  function count () {
    if (counter < n) {
      counter++;
      console.log(counter);
      return aFunction();
    } else {
      return "STOP";
    }
  }
  return count;
}


var myFunction = function () {
  return "hi";
}

var runFnCounter = fnCounter(myFunction, 3);

console.log(runFnCounter());


// function fnCounter(aFunction, n) {
//   var counter = 0;
//   function count () {
//     for (var i = 0; i < counter; i++) {
//       return aFunction();
//     } if (i >= n) {
//       return "STOP";
//     }
//   }
//   return count;
// }




//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here

    // I believe that it will be called at 1 millisecond


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
    // I was wrong, it didn't run at all.

  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here



//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

/*
  What is happening is: An array is holding functions.
*/
var myArr = [function() { return "hi";}];

var funcArray = [
  function() {return 0;},
  function() {return 1;},
  function() {return 2;},
  function() {return 3;},
  function() {return 4;},
  function() {return 5;}
];

funcArray[0]();
