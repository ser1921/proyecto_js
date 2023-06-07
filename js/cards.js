const electrodomesticos = [
    {
        nombre: "Lavadora",
        marca: "Samsung",
        descripcion: "Lavadora de carga frontal",
        cantidad: 5,
        precio: 399.99
    },
    {
        nombre: "Refrigerador",
        marca: "LG",
        descripcion: "Refrigerador de dos puertas",
        cantidad: 3,
        precio: 799.99
    },
    {
        nombre: "Televisor",
        marca: "Sony",
        descripcion: "Televisor LED de 55 pulgadas",
        cantidad: 8,
        precio: 999.99
    },
    {
        nombre: "Horno de microondas",
        marca: "Panasonic",
        descripcion: "Horno de microondas con grill",
        cantidad: 4,
        precio: 199.99
    },
    {
        nombre: "Licuadora",
        marca: "Oster",
        descripcion: "Licuadora de alta potencia",
        cantidad: 6,
        precio: 79.99
    },
    {
        nombre: "Aspiradora",
        marca: "Dyson",
        descripcion: "Aspiradora sin cable",
        cantidad: 2,
        precio: 299.99
    },
    {
        nombre: "Cafetera",
        marca: "Nespresso",
        descripcion: "Máquina de café con cápsulas",
        cantidad: 10,
        precio: 149.99
    },
    {
        nombre: "Batidora",
        marca: "KitchenAid",
        descripcion: "Batidora de pie",
        cantidad: 7,
        precio: 249.99
    },
    {
        nombre: "Secadora de ropa",
        marca: "Whirlpool",
        descripcion: "Secadora de ropa de gas",
        cantidad: 3,
        precio: 599.99
    },
    {
        nombre: "Plancha",
        marca: "Rowenta",
        descripcion: "Plancha de vapor",
        cantidad: 4,
        precio: 49.99
    },
    {
        nombre: "Ventilador",
        marca: "Lasko",
        descripcion: "Ventilador de torre",
        cantidad: 9,
        precio: 79.99
    },
    {
        nombre: "Robot aspirador",
        marca: "iRobot",
        descripcion: "Robot aspirador con mapeo inteligente",
        cantidad: 5,
        precio: 399.99
    },
    {
        nombre: "Tostadora",
        marca: "Hamilton Beach",
        descripcion: "Tostadora de 4 rebanadas",
        cantidad: 6,
        precio: 39.99
    },
    {
        nombre: "Lavavajillas",
        marca: "Bosch",
        descripcion: "Lavavajillas de acero inoxidable",
        cantidad: 4,
        precio: 699.99
    },
    {
        nombre: "Exprimidor de jugo",
        marca: "Breville",
        descripcion: "Exprimidor de jugo de alta potencia",
        cantidad: 3,
        precio: 149.99
    }
];

const stockInicial = () => {
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

stockInicial()



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


