//se crean electrodomesticos como stock inicial desde un json local
const traerElectrodomesticos = async () => {
  try {
    const resp = await fetch("./productos.json");
    const electrodomesticos = await resp.json();
    const tarjetas = document.querySelector("#cards");

    electrodomesticos.forEach(electrodomestico => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `<h3>${electrodomestico.nombre}</h3>
                          <span>${electrodomestico.marca}</span>
                          <p>${electrodomestico.descripcion}</p>
                          <span class="oculto">${electrodomestico.cantidad}</span>
                          <span>$${electrodomestico.precio}</span>
                          <button class="customButton" id="addCarrito">Agregar al carrito</button>`;
      tarjetas.append(div);
    });

    agregarEventoCarrito();
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
};
// mensaje de "agregado al carrito"
const agregarEventoCarrito = () => {
  const tarjetas = document.querySelector("#cards");
  tarjetas.addEventListener("click", (event) => {
    if (event.target.matches(".customButton")) {
      Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        position: "center",
        style: {
          background: "#5cdb95",
        },
      }).showToast();
    }
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