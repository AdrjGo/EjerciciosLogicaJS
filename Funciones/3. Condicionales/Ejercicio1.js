/*
Dado un número entero, regresar su valor absoluto. Sugerencia: usar la expresión condicional y el operador condicional.
Ejemplo. Entrada: −17. Salida: 17.
Ejemplo. Entrada: 63. Salida: 63.
Ejemplo. Entrada: 0. Salida: 0.
*/
function absoluto(num) {
  let resultado = num >= 0 ? num : num * -1;
  return resultado;
}
console.log(absoluto(-17));
console.log(absoluto(63));
console.log(absoluto(0));

//Otra solución
/*
function absoluto(num) {
  if (num >= 0) {
    return num;
  } else {
    return num * -1;
  }
}
console.log(absoluto(-17));
console.log(absoluto(63));
console.log(absoluto(0));
*/