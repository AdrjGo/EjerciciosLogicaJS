/*
Están dados dos números enteros, a y b. Hagamos un análisis de la ecuación lineal a "x = b", donde la incógnita x puede ser un número racional. Si la ecuación tiene una única solución, entonces regresar 1. Si la ecuación no tiene solución, entonces regresar 0. Si la ecuación tiene más de una solución, entonces regresar 2.
Ejemplo. Entrada: 70, −37. Salida: 1. 
Ejemplo. Entrada: 0, 56. Salida: 0. 
Ejemplo. Entrada: 0, 0. Salida: 2.
*/
function analisis(a, b) {
  if (a !== 0) {
    return 1;
  } else if (b !== 0) {
    return 0;
  } else {
    return 2;
  }
}

console.log(analisis(70, -37));
console.log(analisis(0, 57));
console.log(analisis(0, 0));
