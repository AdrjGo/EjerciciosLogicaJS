/*
Dado un número entero a, regresar su parte positiva. En otras palabras, si a es mayor o igual a cero, entonces regresar el mismo número a; en otro caso regresar el número cero.
Ejemplo. Entrada: −20. Salida: 0.
Ejemplo. Entrada: 38. Salida: 38.
*/
function entero(num) {
  let resultado = num < 0 ? 0 : num;
  return resultado
}
console.log(entero(-20))
console.log(entero(38))

//Otra solución
/*
function entero(num) {
  if (num < 0) {
    return 0;
  } else {
    return num
  }
}
console.log(entero(-20))
console.log(entero(38))
*/