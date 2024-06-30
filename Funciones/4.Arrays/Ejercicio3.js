/*
Dados un número natural n y un número entero x, regresar el arreglo de longitud n cuyos elementos son los cuadrados de los enteros consecutivos, a partir de x.
Entrada: 7, −4. Salida: [16, 9, 4, 1, 0, 1, 4].
Entrada: 8, 6. Salida: [ 36, 49, 64, 81, 100, 121, 144, 169 ].
*/
function longitudConsecutivos(n, x) {
  arreglo = [];
  for (let i = 0; i < n; i++, x++) {
    let cuadrado = x ** 2;
    arreglo.push(cuadrado);
  }
  return arreglo;
}
console.log(longitudConsecutivos(7, -4));
console.log(longitudConsecutivos(8, 6));
