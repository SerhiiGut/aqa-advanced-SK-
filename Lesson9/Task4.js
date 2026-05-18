// Створюємо об'єкт person
const person = {
  firstName: "name",
  lastName: "lastName",
  age: 88
};

person.email = "123@gmail.com";

delete person.age;

console.log(person);