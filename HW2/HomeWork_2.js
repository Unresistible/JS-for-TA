//task_1
let x = 1;
let y = 2;

let res1 = '' + x + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (x == x) + '' + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x != y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = ((x == x) + '') * y;
console.log(res4); // NaN
console.log(typeof res4); // "number"


//task_2
let number = prompt('Введіть число: ', 14);
if (((number % 2) == 0) && (number > 0)) {
	console.log(number + ' є парним додатнім.')
} else {
	console.log(number + ' не є парним додатнім.')
}
if (((number % 7) == 0)) {
	console.log(number + ' є кратним числу 7.')
} else {
	console.log(number + ' не є кратним числу 7.')
}


//task_3
let superMassive = [];
superMassive[0] = 5;
superMassive[1] = 'second';
superMassive[2] = true;
superMassive[3] = null;
console.log(superMassive.length);
superMassive[4] = prompt('Введіть що завгодно: ', 777);
console.log(superMassive[4]);
superMassive.shift();
console.log(superMassive);


//task_4
//need ["Rome*Lviv*Warsaw"]
//solution 1:
let cities = ["Rome", "Lviv", "Warsaw"]; 
for (let i = cities.length-2; i>=0; i--)
{
	cities[i] += '*' + cities.pop();
}

//solution 2:
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities[1] += '*' + cities.pop();
cities[0] += '*' + cities.pop();


//task_5
let isAdult = prompt('Please, enter your age:','30');
if (isAdult >= 18) {
	console.log('Ви повнолітній.');
} else if (isAdult < 18) {
	console.log('Ви не повнолітній.');
} else {
	console.log('Некорректний ввод. Спробуйте ще раз');
}


//task_6
let a = Number(prompt('Please, enter side a:',3));
let b = Number(prompt('Please, enter side b:','4'));
let c = Number(prompt('Please, enter side c:','5'));
if ((a > 0) && (b > 0) && (c > 0)) {
	//перевірка і обчислення прощі трикутника
	if (((a + b) > c) && ((a + c) > b) && ((c + b) > a)){
		let p = (a + b + c) / 2,
			triangleArea = ((p * (p - a) * (p - b) * (p - c))) ** 0.5;
		console.log('Area of a triangle is: ' + triangleArea.toFixed(3));
		//перевірка на прямокутність
		if ((a ** 2 + b  ** 2 == c ** 2) || (b ** 2 + c  ** 2 == a ** 2) || (c ** 2 + a  ** 2 == b ** 2)) {
			console.log('Triangle is rectangular');
		} else {
			console.log('Triangle is not rectangular');
		}
	} else {
		console.log('Incorrect data'); //помилка в формуванні трикутника
	}
	
} else {
	console.log('Incorrect data'); //помилка типу данних для довжин сторін
}


//Task_7
//solution 1:
let currentHour = new Date().getHours();
if ((currentHour >= 5) && (currentHour < 11)) {
	console.log( 'Доброго ранку' );
} else if ((currentHour >= 11) && (currentHour < 17)) {
	console.log( 'Доброго дня' );
} else if ((currentHour >= 17) && (currentHour < 23)) {
	console.log( 'Доброго вечора' );
} else {
	console.log( 'Доброї ночі' );
}

//solution 2:
let currentHour = new Date().getHours();
switch (currentHour) {
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
		console.log( 'Доброго ранку' );
		break;
	case 11:
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
		console.log( 'Доброго дня' );
		break;
	case 17:
	case 18:
	case 19:
	case 20:
	case 21:
	case 22:
		console.log( 'Доброго вечора' );
	break;
	default:
	  console.log( 'Доброї ночі' );
}