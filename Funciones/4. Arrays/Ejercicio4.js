/*
Dado un número natural n, regresar el arreglo a de longitud n cuyos elementos son las primeras potencias de 2, a partir de la potencia 0. 
Entrada: 5. Salida: [1, 2, 4, 8, 16].
*/
function potencia(n) {
  arreglo = [];
  for (let i = 0; i < n; i++) {
    let elementos = 2 ** i 
    arreglo.push(elementos)
  }
  return arreglo;
}
console.log(potencia(5));
console.log(potencia(10));
