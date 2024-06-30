/*
Dado un número entero no negativo x, devolver la suma de los últimos dos dígitos de x en el sistema decimal.
Sugerencia: usar el cociente y el resido al dividir entre 10.
Ejemplo. Entrada: 729. Salida: 11.
Ejemplo. Entrada: 688. Salida: 16.
Ejemplo. Entrada: 5. Salida: 5.
*/

function sumaUltimos(x) {
  let ultimo = x % 10;
  console.log(ultimo);
  let penultimo = Math.floor(x / 10) % 10;
  console.log(penultimo);
  let suma = ultimo + penultimo;
  return suma;
}
console.log(sumaUltimos(729));
console.log(sumaUltimos(688));
console.log(sumaUltimos(5));
console.log(sumaUltimos(957));
console.log(sumaUltimos(116));