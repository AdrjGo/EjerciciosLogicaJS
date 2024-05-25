/*
Determinar si el número entero dado es un múltiplo de 3. En otras palabras, dado un número entero a, regresar True si a es un múltiplo de 3; regresar False en otro caso. Sugerencia: en el lenguaje de programación elegido encontrar la operación o función que regresa el resto al dividir un número entre otro.
Ejemplo. Entrada: 18. Salida: True.
Ejemplo. Entrada: −42. Salida: True.
Ejemplo. Entrada: −71. Salida: False.
Ejemplo. Entrada: 0. Salida: True.
*/
function multres(a){
    if(a % 3 === 0){
        return true
    }else{
        return false
    }
}

console.log(multres(18))
console.log(multres(-42))
console.log(multres(-71))
console.log(multres(0))