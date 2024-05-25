/*
Determinar si el número entero dado es positivo. En otras palabras, escribir una función de un argumento entero; si el número dado es positivo, la función debe regresar True; en otro caso la función debe regresar False.
Ejemplo. Entrada: 8. Salida: True.
Ejemplo. Entrada: 53. Salida: True.
Ejemplo. Entrada: 0. Salida: False.
Ejemplo. Entrada: −4. Salida: False.
Ejemplo. Entrada: −70. Salida: False.
*/
function positivo(num){
    if (Math.sign(num) === 1){
        return true
    }else{
        return false
    }
}
console.log(positivo(8))
console.log(positivo(0))
console.log(positivo(53))
console.log(positivo(0))
console.log(positivo(-4))
console.log(positivo(-70))

//Math.sign() -> retorna el signo de un número, indicando si el número es positivo, negativo o cero.
//retorna 1, -1, 0, -0, NaN