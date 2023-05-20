const fecha = prompt("Ingrese la fecha");
console.log("Fecha: " + fecha);

class Producto {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    sumaIva() {
        return this.precio * 1.21;  // método para calcular iva
    }
    precioTotalItem() {
        return this.precio * this.cantidad // método para calcular valor total de item ingresado        
    }
}

const productos = []; //array con los productos creardos

while (true) {
    const nombre = prompt("Ingrese el nombre del producto (presione Esc para salir):");

    if (nombre === null) {
        // El usuario presionó la tecla "Esc"
        break;
    }

    const cantidad = parseInt(prompt("Ingrese la cantidad:"));
    const precio = parseFloat(prompt("Ingrese el precio:"));

    const producto = new Producto(nombre, cantidad, precio);
    productos.push(producto);
}

console.log(productos); //muestra los objetos dentro del array

console.log("Valor total de cada producto:");  //calcula el valor del total de cada producto
productos.forEach((nombre) => {
  const total = nombre.precioTotalItem();
  console.log(`${nombre.nombre}: ${total}`);
});

console.log("Valor unitario mas iva:"); // calcula el iva de un producto
productos.forEach((nombre) => {
  const total = nombre.sumaIva();
  console.log(`${nombre.nombre}: ${total}`);
});