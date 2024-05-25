/*
Determinar si el número entero dado es par.
Sugerencia: en el lenguaje de programación elegido encontrar la operación o función que regresa el resto al dividir un número entre otro.
Ejemplo. Entrada: 5. Salida: False.
Ejemplo. Entrada: −44. Salida: True.
Ejemplo. Entrada: 0. Salida: True.
Ejemplo. Entrada: 466. Salida: True.
*/
function par(num) {
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}
console.log(par(5));
console.log(par(-44));
console.log(par(0));
console.log(par(466));
