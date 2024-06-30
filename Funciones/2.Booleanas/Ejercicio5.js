/*
Determinar si el número entero dado es impar.
Sugerencia: en el lenguaje de programación elegido encontrar la operación o función que regresa el resto al dividir un número entre otro.
Ejemplo. Entrada: 5. Salida: True.
Ejemplo. Entrada: −44. Salida: False.
Ejemplo. Entrada: 0. Salida: False.
Ejemplo. Entrada: 466. Salida: False.
*/
function impar(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(impar(5));
console.log(impar(-44));
console.log(impar(0));
console.log(impar(466));
