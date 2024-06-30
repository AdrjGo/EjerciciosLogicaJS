/*
Escribir una función min2 de dos argumentos enteros que regrese el más pequeño de estos dos números. 
Ejemplo. Entrada: 70, −43. Salida: -43.
Ejemplo. Entrada: −23, −10. Salida: −23. 
Ejemplo. Entrada: −42, 35. Salida: −42. 
Ejemplo. Entrada: −17, −17. Salida: −17.
*/
function min2(a, b) {
  let resultado = a < b ? a : b;
  return resultado
}
console.log(min2(70, -43))
console.log(min2(-23, -10))
console.log(min2(-42, 35))
console.log(min2(-17, -17))

//Otra solución
/*
function min2(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min2(70, -43))
console.log(min2(-23, -10))
console.log(min2(-42, 35))
console.log(min2(-17, -17))
*/