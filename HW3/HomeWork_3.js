//task1
//solution-1
let values = [2, 3, 4, 5];
let result = values[0];
for (let i = 1; i<values.length; i++){
  result *= values[i];
}
console.log(result);

//solution-2
let values = [2, 3, 4, 5];
let result = values[0];
while (values.length>1){
  result *= values.pop();
}
console.log(result);

//task2
function oddEven(number) {
  if (number % 2 == 0) {
    console.log(number + ' is even')
  } else {
    console.log(number + ' is odd') 
  }
}
for (let i = 0; i<=15; i++){
  oddEven(i);
}


//task3
function randArray() {
  let result = [];
  for (let i = 0; i<arguments[0]; i++){
    let randomNumber = Math.floor(Math.random() * 500);
    result.push(randomNumber);
  }
return result;
}
randArray(5);


//task4
function raiseToDegree(a,b) {
  if (((a % 1) === 0) && ((b % 1) === 0)) {
      return a ** b;;
    }
  console.log('Invalid input');
}
let number1 = prompt('Введіть число', 3);
let number2 = prompt('Введіть степінь числа', 4);
raiseToDegree(number1, number2);

//task5
function findMin() {
  let result = arguments[0];
  if (arguments.length == 0){
    return [];
  }
  for (let i = 1; i<arguments.length; i++){
    if (arguments[i]<result) {
      result = arguments[i];
    }
  }
  return result;
}
findMin(12, 14, 4, -4, 0.2); // => -4

//task6
function findUnique(arr) {
  if ((arguments.length == 0)){
    return false;
  }
  if (arr.constructor !== Array){
    return false;
  }
  for (let i = 0; i<arr.length; i++){
    for (let j = i+1; j<arr.length; j++){
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true

//task7
function lastElem(setArray, toShow) {
  if ((arguments.length == 0)){
    return 'Данні відсутні!';
  }
  if (setArray.constructor !== Array){
    return 'Масив не задано!';
  }
  if ((toShow === undefined) ||
    (toShow.constructor !== Number) ||
    (toShow < 1)) {
    return setArray.pop();
  }
  if (toShow > setArray.length){
    toShow = setArray.length;
  }

  let result = [setArray.pop()];
  for (let i = 1; i<toShow; i++){
    result.unshift(setArray.pop());
  }
  return result;
}

console.log(lastElem([3, 4, 10, -5]));    // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


//task8
function convertCapital(text) {
  if ((arguments.length == 0)){
    return 'Данні відсутні!';
  }
  if (text.constructor !== String){
    return 'Строку не передано!';
  }
  if (text.length == 0){
    return '';
  }
  let strCapital = text[0].toUpperCase();
  for (let i = 1; i<text.length; i++){
    if (text[i-1] == ' ') {
      strCapital += text[i].toUpperCase();
    } else {
      strCapital += text[i];
    }
  }
  return strCapital;
}

convertCapital('i love java script'); //'I Love Java Script'