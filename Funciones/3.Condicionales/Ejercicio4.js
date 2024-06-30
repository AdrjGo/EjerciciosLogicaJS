/*
Escribir una función max3 de tres argumentos enteros que regrese el más grande de estos tres números. 
Sugerencia: usar la función max2 del Ejercicio anterior.
*/
function max3(a, b, c) {
  if (a > b && b > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(max3(1, 5, 9));
console.log(max3(15, 100, 58));
console.log(max3(180, 51, 900));
