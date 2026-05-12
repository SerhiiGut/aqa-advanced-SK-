
const car1 = {
  brand: "Opel",
  model: "model1",
  year: 2026
};

const car2 = {
  brand: "jOpel",
  model: "model2",
  owner: "owner"
};


const car3 = {
  ...car1,
  ...car2
};

console.log(car3);