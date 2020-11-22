//task1
function testThrow() {
    let value = arguments[0];
    try {
        throw value;
    } catch (exception) {
        console.log('Caught: ' + exception);
    }
}
testThrow(5); //Caught: 5
testThrow('Test'); //Caught: Test
testThrow(new Error('An error happened')); //Caught: Error: An error happened


//task2
function calcRectangleArea(width, height) {
    try {
        if ((typeof(width) != 'number') ||
           (typeof(height) != 'number')) {
               throw 'Invalid data';
           } else {
               console.log(width*height);
               return;
           }
    } catch (exception) {
        console.log('Error: ' + exception);
    }
}
calcRectangleArea(3,4); //12
calcRectangleArea(3); //Error: Invalid data
calcRectangleArea(3,'2'); //Error: Invalid data


//task3
function checkAge() {
    try {
       let age = prompt('Enter your age:',25);
       if ((age == '') || (age == null)) {
           throw new Error('The field is empty! Please enter your age');
       } 
       if (isNaN(age)) {
           throw new Error('Invalid data! Age should be a number');
       } 
       if (Number(age)<14) {
           throw new Error('Sorry, this content available only for 14+');
       }
       return true;
    } catch (exception) {
        alert(exception.name + ': ' + exception.message);
        return false;
    }
}
if (checkAge()) {
    //run video
}



//task4. 
class MonthException {
    constructor (message){
        this.name = message;
    }
}

function showMonthName(month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    try{
        if (Number.isInteger(month) &&
           (month >= 1) && (month <= 12)) {
            return monthNames[month-1];
        }
        return new MonthException('Incorrect month number');
    } catch {}
}
console.log(showMonthName(5)); //May
console.log(showMonthName(14)); //MonthException Incorrect month number


//task5. 
function showUser(id) {
    try {
        if (array.constructor !== Array) {
            throw new Error();
        }
        throw new Error('ID must not be negative: ' + id);
    } catch (exception) {
        console.log(exception.name + ': ' + exception.message);
        return false;
    }
}

function showUsers(array) {
    let result = [];
    try {
        if (array.constructor !== Array) {
            throw;
        }
        for (let i = 0; i < array.length; i++) {
            let add = showUser(array[i]);
            if (add !== false) {
                result.push(add);
         }
        }
    return result;
    } catch {
        console.log('Error: Invalid data');
    }
}
showUsers([7, -12, 44, 22]); 
//Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

