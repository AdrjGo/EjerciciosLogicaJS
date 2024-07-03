/*
Dado un arreglo a de números enteros, regresar un arreglo de números enteros de la misma longitud,
cuyos elementos son los cuadrados de los elementos del arreglo dado.
Entrada: [−12, 23, 14, 6]. Salida: [144, 529, 196, 36].
*/ 
function arrayCuadrado(array) {
  let arreglo = [];
  for (let i = 0; i < array.length; i++) {
    let elementos = array[i] ** 2;
    arreglo.push(elementos);
  }
  return arreglo;
}
console.log(arrayCuadrado([-12, 23, 14, 6]));

//Otra solución WHILE
function arrayCuadrado2(array) {
  let arreglo = [];
  let i = 0;
  while (i < array.length) {
    let elementos = array[i] ** 2;
    arreglo.push(elementos);
    i++;
  }
  return arreglo;
}
console.log(arrayCuadrado2([-12, 23, 14, 6]));

//Otra solución FOREACH
function arrayCuadrado3(array) {
  let arreglo = [];
  array.forEach((_, i) => {
    let elementos = array[i] ** 2;
    arreglo.push(elementos);
  });
  return arreglo;
}
console.log(arrayCuadrado3([-12, 23, 14, 6]));

//Otra solición MAP
function arrayCuadrado4(array) {
  let elementos = array.map((i) => i ** 2);
  return elementos;
}
console.log(arrayCuadrado4([-12, 23, 14, 6]));

//Otra solución FILL y MAP
function arrayCuadrado5(array) {
  return Array(array.length)
    .fill(0)
    .map((_, i) => array[i] ** 2);
}
console.log(arrayCuadrado5([-12, 23, 14, 6]));

//Otra solución FROM
function arrayCuadrado6(array) {
  return Array.from(array, (i) => i ** 2);
}
console.log(arrayCuadrado6([-12, 23, 14, 6]));
