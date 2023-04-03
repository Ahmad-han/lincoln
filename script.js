function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.sayJobTitle = function() {
  console.log("My job title is " + this.jobTitle);
}

let employee1 = new Employee("John", 25, "Developer");
employee1.sayHello();
employee1.sayJobTitle();
