//se crean electrodomesticos como stock inicial desde un json local

const traerElectrodomesticos = async () =>{
    const resp = await fetch ("./productos.json")
    const electrodomesticos = await resp.json()
    const tarjetas = document.querySelector("#cards");
    electrodomesticos.forEach(electrodomestico => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<h3>${electrodomestico.nombre}</h3>
                        <span>${electrodomestico.marca}</span>
                        <p>${electrodomestico.descripcion}</p>
                        <span class="oculto">${electrodomestico.cantidad}</span>
                        <span>$${electrodomestico.precio}</span>
                        <button class="customButton">Agregar al carrito</button>`;
        tarjetas.append(div);
    });
};



traerElectrodomesticos()


const verItems = () => {  //funcion para ver los items creados
    const tarjetas = document.querySelector("#cards")
    items.forEach(item => {
        const div = document.createElement("div")
        div.classList.add("item")
        div.innerHTML = `<h3>${item.nombre}</h3>
                        <span>${item.marca}</span>
                        <p>${item.descripcion}</p>
                        <span class="oculto">${item.cantidad}</span>
                        <span>$${item.precio}</span>
                        <button class="customButton" id="addCarrito">Agregar al carrito</button>
        `
        tarjetas.append(div)
    })

}

verItems()

// mensaje de "agregado al carrito"
const agregarAlCarrito = () => {
    const botones = document.querySelectorAll(".customButton");
    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            Toastify({
                text: `Producto agregado al carrito`,
                duration: 3000,
                position: "center",
                style: {
                    background: "#5cdb95"
                }
            }).showToast();
        });
    });
};

agregarAlCarrito();
