/*
Dado un número natural n y dos números enteros a y b, regresar el arreglo de longitud n que contiene los primeros n elementos de la progresión aritmética con el valor inicial a y la diferencia (incremento) b.
Entrada: 5, −3, 11. Salida: [−3, 8, 19, 30, 41].
Entrada: 4, 20, −15. Salida: [20, 5, −10, −25].
Entrada: 0, 5, −3. Salida: [].
*/
function progresion(n, a, b) {
  arreglo = [];
  if (n > 0) {
    arreglo.push(a);
  }

  for (let i = 1; i < n; i++) {
    let elementos = (a += b); //a = a + b
    arreglo.push(elementos);
  }
  return arreglo;
}
console.log(progresion(5, -3, 11));
console.log(progresion(4, 20, -15));
console.log(progresion(0, 5, -3));
