// Створюємо масив об'єктів users
const users = [
  {
    name: "name1",
    email: "123@gmail.com",
    age: 25
  },
  {
    name: "name2",
    email: "312@gmail.com",
    age: 30
  },
  {
    name: "name3",
    email: "213.com",
    age: 28
  }
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Вік: ${age}`);
  console.log("-------------------");
}