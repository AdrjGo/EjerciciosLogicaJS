/*
Dado un número natural n, regresar el arreglo a de longitud n cuyos elementos son las primeras potencias de 2, a partir de la potencia 0. 
Entrada: 5. Salida: [1, 2, 4, 8, 16]. 
*/
function potencia(n) {
  let arreglo = [];
  for (let i = 0; i < n; i++) {
    let elementos = 2 ** i;
    arreglo.push(elementos);
  }
  return arreglo;
}
console.log(potencia(5));
console.log(potencia(10));

//Otra solución WHILE
function potencia2(n) {
  let arreglo = [];
  let i = 0;
  while (i < n) {
    let cuadrado = 2 ** i;
    arreglo.push(cuadrado);
    i++;
  }
  return arreglo;
}
console.log(potencia2(5));
console.log(potencia2(10));

//Otra solución MAP
function potencia3(n) {
  return [...Array(n).keys()].map((i) => 2 ** i);
}
console.log(potencia3(5));
console.log(potencia3(10));

//Otra solución con FILL Y MAP
function potencia4(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => 2 ** i);
}
console.log(potencia4(5));
console.log(potencia4(10));

//Otra solución FROM
function potencia4(n) {
  return Array.from({ length: n }, (_, i) => 2 ** i);
}
console.log(potencia4(5));
console.log(potencia4(10));
