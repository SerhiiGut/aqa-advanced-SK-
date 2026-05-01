//Function Declaration
function rectangleArea(width, height) {
  return width * height;
}

const result1 = rectangleArea(5, 10);
console.log(result1);

//Function Expression
const rectangleArea2 = function(width, height) {
  return width * height;
};

const result2 = rectangleArea2(5, 10);
console.log(result2);

//Arrow Function
const rectangleArea3 = (width, height) => width * height;

const result3 = rectangleArea3(5, 10);
console.log(result3); 