function divide(numerator , denominator ) {
    if(denominator === 0){
        throw new Error ("На 0 не ділим")
    }

    if(typeof numerator !== `number`|| typeof denominator !== `number`)
        throw new Error ("Аргументи повинні бути числами")

    return numerator / denominator;
}
try {
  console.log(divide(4, 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}

try {
  console.log(divide(1, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}

try {
  console.log(divide(1, `f`));
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}

try {
  console.log(divide('5', 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}