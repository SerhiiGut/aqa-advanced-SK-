const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedNumbers = [...numbersList];

sortedNumbers.sort((a, b) => a - b);

console.log("Початковий масив:", numbersList);
console.log("Відсортований масив:", sortedNumbers);