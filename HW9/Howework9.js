//task_1 
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


//task_2
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {names:[name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26


//task_3
function mul(...rest) {
  let checker = true;
  let result = 1;
  for (const val of rest) {
    if (typeof val === "number") {
      checker = false;
      result *= val;
    }
  }
  if (checker) return 0;  
  return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


//task_4. 
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  }
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return ((callback) => {
      this.result = callback();
    });
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


//task_5
function mapBuilder(keysArray, valuesArrays) {
  let map = new Map();
  keys.forEach((element,index) => {
    map.set(element,values[index]);
  });
  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"