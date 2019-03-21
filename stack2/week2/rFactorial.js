function my_factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * rFactorial(num-1);
}


function broken(num) {
  if (num <= 1) {
    return 1;
  }
  return broken(num-1) + broken(num-2);
}

x = broken(10);
console.log(x);


