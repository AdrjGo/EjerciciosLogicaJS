/*
Dado un número natural n y un número entero v, regresar el arreglo de longitud n tal que todas sus entradas son iguales a v. En otras palabras, construir un arreglo constante de longitud dada y con el valor dado.
Entrada: 6, −14. Salida: [−14, −14, −14, −14, −14, −14].
*/
function longitud(n, v) {
  arreglo = [];
  for (let i = 0; i < n; i++) {
    arreglo.push(v);
  }
  return arreglo;
}
console.log(longitud(6, -14));
console.log(longitud(10, 5));
