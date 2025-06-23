/**
 * Prototypes in JS
 * A Js object is an entity having state and behavior(properties and methods)
 * JS objects have a special proprty called Prototype
 * this keyword - used to access object
 * Every object has a built-in property known as Prototype aur Prototype apne aap me object hai jisme bht saari methods aur properties hoti hai eg:. arr.push toh push jo prototype se aata hai
 */

const student = {
  fullName: "shradha khapra",
  marks: 94.4,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

// We can create our own Prototypes as well
const employee = {
  calcTax() {
    console.log("Tax rate is 10% ");
  },
};

const shivanshTandon = {
  salary: 150000,
};

// We can set a prototype using obj.__proto__
shivanshTandon.__proto__ = employee;

// Prototype is reference to an object

// If object and prototype have same method - object method will be used eg:-

const shivanshTandon15 = {
  salary: 150000,
  calcTax() {
    console.log("Tax is 15%");
  },
};

shivanshTandon15.__proto__ = employee;

/**
 * Classes in JS
 * Class is program-code template for creating objects
 * Those objects wil have some state(variables) and some behavior(functions) inside it.
 * Classes ek Object ko banane ka Blueprint/template deti hai
 */

class ToyotaCar {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  //   setBrand(brand) {
  //     this.brand =
  //       brand; /** this.brand yeh class se banne waali saare objects ki unki property hai aur
  //       jo brand hai vo variable hai jo as argument humne pass kra hai
  //        */
  //   }
}
//Syntax to create object from any class -> let myObj = new MyClass()
let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");

/** We use classes jab humme same template ke ooper multiple objects banani ho
 *
 * Constructor() method - reserved keyword hai
 * In JavaScript, a constructor is a special function used to create and initialize objects.
 * Think of it like a blueprint for building multiple objects with the same structure but different values
 * automatically invoked by new
 * initializes object
 * Even if we dont create a constructor JS automatically creates it for us.
 */

let lexus = new ToyotaCar("lexus", 18); //constructor invoked
console.log(lexus);

/**
 * Inheritance -  Inheritance is passing down properties & methods from parant class to child class
 * If Child and Parent have same method - child's method will be used.[Method Overriding]
 * to inherit we use keyword - extends
 */

class Parent {
  hello() {
    console.log("Hello");
  }
}

class Child extends Parent {}

let obj = new Child();

class Person {
  constructor(name) {
    this.species = "home Sapiens";
    this.name = name;
  }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("do nothing");
  }
}
// same function in parent and child class then child class fnx will be called this is method overriding
class Engineer extends Person {
  constructor(name, designation) {
    super(name); // to invoke parent class constructor
    this.designation = designation;
  }
  work() {
    super.eat();
    console.log("Solve problems, build something");
  }
}
let shivanshObj = new Engineer("Shivansh", "Full Stack Developer");
// class Doctor extends Person {
//   work() {
//     console.log("treat pateints");
//   }
// }

/**
 * Super Keyword -The super keyword is used to call the constructor of its parent's properties and methods
 */

// Practice
let DATA = "Welcome to College";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`Data = ${DATA}`);
  }
}

let stud1 = new User("shiva", "abc@gmail.com");
let stud2 = new User("shivansh", "xyz@gmail.com");

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "Admin editted the data";
  }
}

let admin1 = new Admin("admin", "admin@gmail.com");
admin1.editData();

/**
 * Error Handling
 * try-catch
 */
let a = 10;
let b = 5;
console.log(a + b);
console.log(a * b);
try {
  console.log(a - c); // error
} catch (error) {
  console.log(error);
}
console.log(a / b);
