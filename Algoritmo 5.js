// Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].

var array = [1,2,-1,-3]
function retornarnegativosa0(){
    var newarray = [];
    for (var i = 0 ; i < array.length ; i++){
        if ( array[i] < 0 ){
            newarray.push(0)
        }
        else if( array[i] > 0 ){
            newarray.push(array[i])
        }
    }
    return newarray
}
console.log(retornarnegativosa0(array))


// Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

var array = [1,2,3];
function movercadena(){
    newarray = [];
    for (var i = 0 ; i < array.length ; i++){
        if(array[i] > array[0]){
            newarray.push(array[i])
        }
    }
    newarray.push(0);
    return newarray;
}
console.log(movercadena(array))


// Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

var array = [1, 2, 3];
function reversa(arr) {
    var len = arr.length;
    for (var i = 0; i < len / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
    return arr;
}
console.log(reversa(array));


// Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

var array = [4,"ulysses", 42, "false"];
function reptetirvalor(){
    var newarray = [];
    for (var i = 0 ; i < array.length ; i++){
        newarray.push(array[i], array[i]);
    }
    return newarray
}
console.log(reptetirvalor(array))