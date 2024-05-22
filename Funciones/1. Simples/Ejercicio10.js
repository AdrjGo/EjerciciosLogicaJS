/*Dado un número entero x, regresar el resto al dividir x entre 7.
Sugerencia: encontrar la operación o la función correspondiente en el lenguaje de programación elegido.
Ejemplo. Entrada: 17. Salida: 3.
Ejemplo. Entrada: −40. Salida: -5.
Ejemplo. Entrada: 35. Salida: 0.
*/

function restante(x) {
  residuo = x % 7;
  return residuo;
}
console.log(restante(17))
console.log(restante(-40))
console.log(restante(35))