/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los números 1 (en posiciones pares) y −1 (en posiciones impares).
Entrada: 5. Salida: [1, −1, 1, −1, 1].
*/
function parImpar(n) {
  arreglo = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arreglo.push(1);
    } else {
      arreglo.push(-1);
    }
  }
  return arreglo;
}
console.log(parImpar(5));
console.log(parImpar(11));
