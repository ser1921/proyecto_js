const fecha = prompt("Ingrese la fecha");
console.log("Fecha: " + fecha);

let producto = prompt("Ingrese nombre del producto - para finalizar escriba esc");
let productos = []; // array para almacenar los productos
let sumaPrecioTotal = 0;

//función para sacar el valor de cada producto
function multiplicar(cantidad, precio) {
    return cantidad * precio;
}

while (producto != "esc") {
    if (producto != "esc") {
        let cantidad = parseInt(prompt("Ingrese cantidad"));
        let precio = parseInt(prompt("Ingrese precio unitario"));
        let precioTotalItem = multiplicar(cantidad, precio);

        // crear el objeto producto y agregarlo al array "productos"
        let productoObjeto = {
            nombre: producto,
            cantidad: cantidad,
            precio: precio,
            precioTotal: precioTotalItem
        };
        productos.push(productoObjeto);

        console.log("Item: ${productoObjeto.nombre} Cantidad: ${productoObjeto.cantidad} Precio: ${productoObjeto.precio} Precio Total: $ ${productoObjeto.precioTotal}");
        sumaPrecioTotal += productoObjeto.precioTotal;
    }
    producto = prompt("Ingrese nombre del producto - para finalizar escriba esc");
}

alert("El valor total del inventario ingresado el día ${fecha} es de $ ${sumaPrecioTotal}");

//muestra por consola los nombres de los productos dentro del array
console.log("Nombres de los productos:");
for (let i = 0; i < productos.length; i++) {
  console.log("Producto ${i + 1}: ${productos[i].nombre}");
}




