/*
Dado un número real estrictamente positivo, regresar su raíz cúbica.
Ejemplo. Entrada: 65. Salida: 4.02072575858906.
Ejemplo. Entrada: 1000. Salida: 10.0000000000000.
*/

function raizCubica(x) {
  //Math.cbrt = raíz cúbica
  //Math.sqrt = raíz cuadrada
  return Math.cbrt(x);
}
console.log(raizCubica(65));
console.log(raizCubica(1000));
