'use strict';

const Person = function(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age

};

Person.prototype.bio = function() {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
}

const me = new Person('Elvis', 'Knapman', 33);

const person2 = new Person('Clancey', 'Turner', 51)

console.log(me.bio());
console.log(person2.bio());
