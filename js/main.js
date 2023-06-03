class Item {
    constructor(nombre, marca, descripcion, cantidad, precio) {
        this.nombre = nombre
        this.marca = marca
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.precio = precio
        this.fechaCreacion = new Date()
    }
}

const items = JSON.parse(localStorage.getItem("items")) || []  //en caso de que el storage este vacío, crea un array

const crearProducto = () => { //funcion para crear productos
    const crearItem = document.querySelector("#crearItem")
    crearItem.addEventListener("submit", (e) => {
        e.preventDefault()
        const nombre = e.target.children["nombre"].value
        const marca = e.target.children["marca"].value
        const descripcion = e.target.children["descripcion"].value
        const cantidad = e.target.children["cantidad"].value
        const precio = e.target.children["precio"].value
        const item = new Item(nombre, marca, descripcion, cantidad, precio)
        items.push(item)
        localStorage.setItem("items", JSON.stringify(items))
        console.log(items)
        crearItem.reset()
    })
}

const verItems = () => {  //funcion para ver los items creados en tarjetas
    const tarjetas = document.querySelector("#cards")
    items.forEach(item =>{
        const div = document.createElement("div")
        div.classList.add("item")
        div.innerHTML = `<h3>${item.nombre}</h3>
                        <span>${item.marca}</span>
                        <span>${item.descripcion}</span>
                        <span>${item.cantidad}</span>
                        <span>${item.precio}</span>
        `
        tarjetas.append(div)   
    })

}
verItems()
crearProducto()


