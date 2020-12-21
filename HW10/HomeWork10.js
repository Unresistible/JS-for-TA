//task_1
function getPromise(message, delay) {
  const result = new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve(message);
    }, delay);
  });
  return result;
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);	
});
//Результат: через 2 сек в консолі виводиться "test promise"


//task_2
function calcArrProduct(arr) {
  let result = 1;
  let flag = false;
  for (const val of arr) {
    if (typeof val !== "number") {
      flag = true;
    } else {
      result *= val;
    }
  }
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve('Error! Incorrect array!')
    } else {
      resolve(result);
    }
  });
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));// "Error! Incorrect array!"

//task_3
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
function showNumbers() {
  let time = 0;
  for (let i = 0; i<10; i++) {
    time += Math.random()*3000;
    delay(i,time).then(function (result) {console.log(result)});
  }
}
showNumbers();
//Результат: з різним рендомним інтервалом (наприклад від 0 до 3 сек) в консоль послідовно  виводяться числа 0,1,2,3,4,5,6,7,8,9 

//task_4
//scenario 1:
const delay = async (i, time) => {
  setTimeout(() => console.log(i), time);
}

function showNumbers() {
  let time = 0;
  for (let i = 0; i<10; i++) {
    time += Math.random()*3000;
    delay(i,time);
  }
}
showNumbers();

//scenario 2:
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
  //let time = 0;
  for (let i = 0; i<10; i++) {
    let time = Math.random()*3000;
    const result = await delay(i,time);
    console.log(result);
  }
}
showNumbers();