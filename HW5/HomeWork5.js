//task1
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};

function propsCount(currentObject) {
  let count = 0;
  for (i in currentObject) {
    count++;
  }
  return count;
}
propsCount(mentor);  // 3
			                     		

//task2
let candies = {
  color: 'red',
  size: 's',
  mass: 4,
  massType: 'mg',
  price: 10
};

function showProps(obj) {
  let arrayOfProperties = [],
      arrayOfValues = [];
  for (i in obj) {
    arrayOfProperties.push(i);
    arrayOfValues.push(obj[i]);
  }
  console.log(arrayOfProperties);
  console.log(arrayOfValues);
  return;
}
showProps(candies);  
//["color", "size", "mass", "massType", "price"]
//["red", "s", 4, "mg", 10]


//task3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  
  showFullName() {
    return this.surname + ' ' + this.name;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return this.surname + ' ' + this.name + ' ' + midleName;
  }
  showCourse() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5


//task4
class Worker {
  constructor (fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    console.log(this.fullName + ' salary: ' + (this.dayRate * this.workingDays));
  }
  
  #experience = 1.2;
  showSalaryWithExperience() {
    console.log(this.fullName + ' salary: ' + (this.dayRate * this.workingDays * this.#experience));
  }
  get showExp() {
    return this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
  }
}

function salaryWithExperience(dayRate, workingDays, experience) {
  let result = dayRate * workingDays * experience
  return result;
}

function sortSalary() {
  let workers = arguments;
  //sorting by salaryWithExperience
  for (let i = 0; i < workers.length - 1; i++) {
    for (let j = i + 1; j < workers.length; j++) {
      let salary1 = salaryWithExperience(workers[i].dayRate, workers[i].workingDays, workers[i].showExp);
      let salary2 = salaryWithExperience(workers[j].dayRate, workers[j].workingDays, workers[j].showExp);
      if (salary2 < salary1) {
        let temp = workers[i];
        workers[i] = workers[j];
        workers[j] = temp;
      }      
    }
  }

  console.log('Sorted salary:');
  for (let i = 0; i < workers.length; i++) {
    console.log(workers[i].fullName + ': ' + salaryWithExperience(workers[i].dayRate, workers[i].workingDays, workers[i].showExp));
  }
}

//Example:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

sortSalary(worker1, worker2, worker3);

/*Output example:
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
. . . . . .

Sorted salary:
John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584
*/



//task5
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }
  getArea () {
    return this.a * this.b * 0.5;
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }
  getArea () {
    return this.a * this.a;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea () {
    return this.r * this.r * Math.PI;
  }
}

function handleFigures(figures) {
  let areas = [];
  for (let i = 0; i < figures.length; i++) {
    if (figures[i] instanceof GeometricFigure) {
      let name = figures[i].toString();
      let area = figures[i].getArea();
      areas.push(area);
      console.log('Geometric figure: ' + name + ' - area: ' + area);
    }
  }
  return areas.reduce((sum,value) => sum + value);
}
	
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  console.log(handleFigures(figures));

//Geometric figure: Triangle - area: 10
//Geometric figure: Square - area: 49
//Geometric figure: Circle - area: 78.53981633974483
//137.53981633974485

