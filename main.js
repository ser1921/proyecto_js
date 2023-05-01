const fecha = prompt("ingrese la fecha");
console.log("Fecha: " + fecha);

let producto = prompt("ingrese nombre del producto - para finalizar escriba esc");
let cantidad;
let precio;
let sumaPrecioTotal = 0;

do {
    if (producto != "esc"){
        cantidad = parseFloat(prompt("ingrese cantidad"));
        precio = parseFloat(prompt("ingrese precio unitario"));
        let precioTotalItem = multiplicar(cantidad,precio)

        console.log("Item: " + producto + " Cantidad: " + cantidad + " Precio: " + precio + " Precio Total: $ " + precioTotalItem);
        sumaPrecioTotal += precioTotalItem;
    }
    producto = prompt("ingrese nombre del producto - para finalizar escriba esc");
} while (producto != "esc");

alert("El valor total del inventario ingresado el día " + fecha + " es de " + " $ " + sumaPrecioTotal)

function multiplicar(cantidad, precio){
    let  precioItem = cantidad * precio
    return precioItem
}

