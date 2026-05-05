function count(num) {
  if (num <= 0) {
    return;
  }

  console.log(num);
  count(num - 1);
}

count(5);