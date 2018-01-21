var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elementtoadd) {
  var newarray = [elementtoadd, ...array];
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, elementtoadd) {
  array.unshift(elementtoadd);
  return array;
}

<<<<<<< HEAD
function addElementToEndOfArray(array, elementtoadd) {
 var newarray = [...array, elementtoadd];
  return newarray;
}

=======
// broken
function addElementToEndOfArray(array, elementtoadd) {
 var newarray = array.push(elementtoadd);
  return newarray;
}

// gud2go
>>>>>>> 70246d9ffd4ae1fbcfa87314bb3f51d78a747602
function destructivelyAddElementToEndOfArray(array, elementtoadd) {
  array.push(elementtoadd);
  return array;
}

<<<<<<< HEAD
function accessElementInArray (array, index) {
  return(array[index]);
}

=======
// broken
function accessElementInArray (array, index) {
  console.log(array[index]);
}

// gud2go
>>>>>>> 70246d9ffd4ae1fbcfa87314bb3f51d78a747602
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

<<<<<<< HEAD
function removeElementFromBeginningOfArray (array) {
  var newarray = array.slice(1);
=======
// 
function removeElementFromBeginningOfArray (array) {
  var newarray = array.slice(0);
>>>>>>> 70246d9ffd4ae1fbcfa87314bb3f51d78a747602
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newarray = array.slice(0, array.length -1);
  return newarray;
}