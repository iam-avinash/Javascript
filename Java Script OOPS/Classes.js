// function Person(name_of_person, age_of_person) {
//   (this.name = name_of_person), (this.age = age_of_person);
// }

// const details = new Person("Anoop", "28");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi My Name is ${this.name}, How are you?`);
  }

  static information(person1, person2) {
    console.log("THis is static method");
    if (person1.age > person2.age) {
      console.log("Person1 is older");
    } else {
      console.log("Person2 is older");
    }
  }
}

console.log(Person);

let person1 = new Person("Anoop", "26");
console.log(person1);
let person2 = new Person("Rahul", "29");
console.log(person2);

console.log(Person.information(person1, person2));

// Class Inheritance
class Student extends Person {
  constructor(name, age, roll_Number) {
    super(name, age);
    this.roll_Number = roll_Number;
  }
}

let studnet1 = new Student("anoop", "26", "B123");
console.log(studnet1);

class Teacher extends Student {
  constructor(name, age, batch, class_size) {
    super(name, age);
    this.batch = batch;
    this.size = class_size;
  }
}

let teacher1 = new Teacher("Rahul", "30", "DSA", "40");
console.log(teacher1);

// Person1.greet();
// Person.information();
// console.log(Person.information(Person1, Person2));
