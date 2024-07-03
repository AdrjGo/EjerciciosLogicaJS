/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los números 1 (en posiciones pares) y −1 (en posiciones impares).
Entrada: 5. Salida: [1, −1, 1, −1, 1].
*/ 
function parImpar(n) {
  arreglo = [];
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? arreglo.push(1) : arreglo.push(-1);
  }
  return arreglo;
}
console.log(parImpar(5));
console.log(parImpar(11));


//Otra solución WHILE
function parImpar2(n) {
  let arreglo = [];
  let i = 0;
  while (i < n) {
    i % 2 === 0 ? arreglo.push(1) : arreglo.push(-1);
    i++;
  }
  return arreglo;
}
console.log(parImpar2(5));
console.log(parImpar2(11));


//Otra solución MAP
function parImpar3(n) {
  return [...Array(n).keys()].map((i) => (i % 2 === 0 ? 1 : -1));
}
console.log(parImpar3(5));
console.log(parImpar3(11));


//Otra solución FILL y MAP
function parImpar4(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? 1 : -1));
}
console.log(parImpar4(5));
console.log(parImpar4(11));


//Otra solución FROM
function parImpar5(n) {
  return Array.from({ length: n }, (_, i) => (i % 2 === 0 ? 1 : -1));
}
console.log(parImpar5(5));
console.log(parImpar5(11));
