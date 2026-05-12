const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map((element, index) => {
    return element * index;
});

console.log(newArray);