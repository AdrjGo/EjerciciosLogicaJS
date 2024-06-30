/*
Escribir una función min3 de tres argumentos enteros que regrese el más pequeño de estos tres números. 
Sugerencia: usar la función min2 del Ejercicio anterior.
*/
function min3(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(min3(10, 5, 9));
console.log(min3(15, 100, 58));
console.log(min3(180, 51, 900));
