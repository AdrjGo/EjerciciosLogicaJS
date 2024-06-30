/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los cuadrados de los primeros números naturales.
Entrada: 5. Salida: [0, 1, 4, 9, 16].
Entrada: 20. Salida: [  0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361].
*/
function longitudCuadrados(n) {
  arreglo = [];
  for (let i = 0; i < n; i++) {
    let cuadrados = i ** 2;
    arreglo.push(cuadrados);
  }
  return arreglo;
}
console.log(longitudCuadrados(5));
console.log(longitudCuadrados(20));
