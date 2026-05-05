function handleNum(num, even, odd) {
  if (num % 2 === 0) {
    handleEven ();
  } else {
    handleOdd ();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(1, handleEven, handleOdd);