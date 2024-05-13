import prendas from "../data/prendas";

const listPrendas = document.querySelector(".list-prendas");

prendas.forEach((prenda) => {
  const divPrenda = document.createElement("div");
  divPrenda.classList.add("prenda");

  const img = document.createElement("img");
  img.src = prenda.img;
  img.alt = prenda.descripcion;
  divPrenda.appendChild(img);

  const categoria = document.createElement("p");
  categoria.textContent = `Categoría: ${prenda.categoria}`;
  divPrenda.appendChild(categoria);

  const precio = document.createElement("p");
  precio.textContent = `Precio: $${prenda.precio}`;
  divPrenda.appendChild(precio);

  const talla = document.createElement("p");
  talla.textContent = `Talla: ${prenda.talla}`;
  divPrenda.appendChild(talla);

  const descripcion = document.createElement("p");
  descripcion.textContent = `Descripción: ${prenda.descripcion}`;
  divPrenda.appendChild(descripcion);

  const stock = document.createElement("p");
  stock.textContent = `Stock: ${prenda.stock}`;
  divPrenda.appendChild(stock);

  const tienda = document.createElement("p");
  tienda.textContent = `Tienda: ${prenda.tienda}`;
  divPrenda.appendChild(tienda);

  const ubicacion = document.createElement("p");
  ubicacion.textContent = `Ubicación: ${prenda.ubicacion}`;
  divPrenda.appendChild(ubicacion);

  const btnAgregar = document.createElement("button");
  btnAgregar.textContent = "Agregar";
  btnAgregar.addEventListener("click", () => {
    // Lógica para agregar la prenda al carrito
    console.log(`Agregando ${prenda.descripcion} al carrito`);
  });
  divPrenda.appendChild(btnAgregar);

  listPrendas.appendChild(divPrenda);
});
