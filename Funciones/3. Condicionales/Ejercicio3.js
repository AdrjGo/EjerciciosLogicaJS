/*
Escribir una función max2 de dos argumentos enteros que regrese el más grande de estos dos números. 
Ejemplo. Entrada: 70, −43. Salida: 70.
Ejemplo. Entrada: −23, −10. Salida: −10. 
Ejemplo. Entrada: −42, 35. Salida: 35. 
Ejemplo. Entrada: −17, −17. Salida: −17.
*/
function max2(a, b) {
  let resultado = a > b ? a : b;
  return resultado
}
console.log(max2(70, -43))
console.log(max2(-23, -10))
console.log(max2(-42, 35))
console.log(max2(-17, -17))

//Otra solución
/*
function max2(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max2(70, -43))
console.log(max2(-23, -10))
console.log(max2(-42, 35))
console.log(max2(-17, -17))
*/
