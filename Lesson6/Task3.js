function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  }
  if (ordered > available) {
    return "Your order is too large, we dont have enough goods.";
  }
  return "Your order is accepted";
}
console.log(checkOrder(1, 0));
console.log(checkOrder(2, 3));
console.log(checkOrder(2, 1));