const misPrendas = [
  {
    id: 1,
    categoria: "remera",
    precio: 50500,
    img: "https://media.istockphoto.com/id/137996281/es/foto/camiseta-azul.jpg?s=2048x2048&w=is&k=20&c=dI6xwfeCgv_NCUIslWPEO1WxvWrSqifbNcIe9r8xoP0=",
    talla: "M",
    descripcion: "Remera de algodón azul con cuello redondo",
    stock: 10,
    tienda: "ModaArgentina",
    ubicacion: "Av. de Mayo 123",
  },
  {
    id: 2,
    categoria: "remera",
    precio: 50300,
    img: "https://media.istockphoto.com/id/898398734/es/foto/camisa-blanca-t.jpg?s=2048x2048&w=is&k=20&c=l7gsLW-9mi0Ms1GvhATgJQZQSsVHJD4ZZikrM3V-LTA=",
    talla: "S",
    descripcion: "Remera básica de algodón blanco",
    stock: 5,
    tienda: "FashionCity",
    ubicacion: "Calle Florida 456",
  },
  {
    id: 3,
    categoria: "remera",
    precio: 50800,
    img: "https://static.cotodigital3.com.ar/sitios/fotos/full/00574700/00574769.jpg?3.0.169",
    talla: "L",
    descripcion: "Remera de manga corta negra con estampado",
    stock: 8,
    tienda: "ElGuardarropa",
    ubicacion: "Av. Rivadavia 789",
  },
  {
    id: 7,
    categoria: "buzo",
    precio: 53500,
    img: "https://media.istockphoto.com/id/1142211730/es/foto/frente-de-sudadera-con-capucha-aislada-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=skgSK6Q5eoRps2frGLlp9KGMkewJ6jDHTTX-5SZsimg=",
    talla: "L",
    descripcion: "Buzo azul con capucha y bolsillos",
    stock: 7,
    tienda: "BuzosTop",
    ubicacion: "Av. Belgrano 456",
  },
  {
    id: 8,
    categoria: "buzo",
    precio: 53200,
    img: "https://www.puntosport.com.ar/16612-medium_default/buzo-new-balance-mujer-medio-cierre-gris-melange-oscuro-wt01137bkh.jpg",
    talla: "S",
    descripcion: "Buzo gris oscuro con cierre frontal",
    stock: 4,
    tienda: "BuzosFashion",
    ubicacion: "Calle Lavalle 890",
  },
  {
    id: 9,
    categoria: "buzo",
    precio: 53800,
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8525ecd84ded478881afaac400ce8925_9366/Buzo_con_Capucha_Bordado_Diagonal_Negro_FM3366_01_laydown.jpg",
    talla: "M",
    descripcion: "Buzo negro de algodón con logo bordado",
    stock: 9,
    tienda: "BuzosSport",
    ubicacion: "Av. Córdoba 1234",
  },
  {
    id: 13,
    categoria: "pantalon",
    precio: 52500,
    img: "https://www.ansilta.com/img/articulos/2023/12/pantalon_congo_5_versatil_1_imagen3.jpg",
    talla: "S",
    descripcion: "Pantalón de tela azul con bolsillos laterales",
    stock: 8,
    tienda: "PantalonesAZ",
    ubicacion: "Calle Florida 456",
  },
  {
    id: 14,
    categoria: "pantalon",
    precio: 52200,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2Ffd%2F5efd192beb9c2908670df72c1b568a7df9edd30b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_dressed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    talla: "M",
    descripcion: "Pantalón de vestir gris oscuro",
    stock: 3,
    tienda: "PantalonesGris",
    ubicacion: "Av. Rivadavia 789",
  },
  {
    id: 15,
    categoria: "pantalon",
    precio: 53000,
    img: "https://via.placeholder.com/150",
    talla: "L",
    descripcion: "Pantalón negro de jeans",
    stock: 6,
    tienda: "JeansNegros",
    ubicacion: "Calle Corrientes 1011",
  },
  {
    id: 19,
    categoria: "shorts",
    precio: 52000,
    img: "",
    talla: "M",
    descripcion: "Shorts deportivos azul marino",
    stock: 7,
    tienda: "ShortsAzul",
    ubicacion: "Calle Lavalle 890",
  },
  {
    id: 20,
    categoria: "shorts",
    precio: 51800,
    img: "https://media.istockphoto.com/id/1147316249/es/foto/pantalones-vaqueros-aislados-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=ASLmbKzs7sGSO1ColSrBl7Ed-fzwOPYsyNTjpPs3mBI=",
    talla: "L",
    descripcion: "Shorts de tela gris con bolsillos traseros",
    stock: 4,
    tienda: "ShortsGris",
    ubicacion: "Av. Córdoba 1234",
  },
  {
    id: 21,
    categoria: "shorts",
    precio: 52200,
    img: "https://static.miinto.net/f4ea197dec645f2420241bc5d61428d8.jpg?width=693&height=842",
    talla: "XL",
    descripcion: "Shorts negros de algodón con cordón en la cintura",
    stock: 9,
    tienda: "ShortsNegros",
    ubicacion: "Av. Independencia 567",
  },
];

const divTabla = document.querySelector(".table-prenda");

// Se crea la tabla
const tabla = document.createElement("table");
tabla.classList.add(
  "table",
  "table-hover",
  "table-bordered",
  "border-danger-subtle"
);

//Encabezado
const encabezado = document.createElement("thead");
encabezado.classList.add("text-center", "encabezado");
const encabezadoFila = document.createElement("tr");
encabezado.innerHTML = `
  <th>ID</th>
  <th>CATEGORÍA</th>
  <th>PRECIO</th>
  <th>STOCK</th>
  <th>ACCIONES</th>
`;
encabezado.appendChild(encabezadoFila);

//Cuerpo de la tabla
const cuerpoTabla = document.createElement("tbody");

misPrendas.forEach((prenda) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${prenda.id}</td>
    <td>${prenda.categoria}</td>
    <td>${prenda.precio}</td>
    <td>${prenda.stock}</td>
    <td class="text-center">
      <button type="button" class="btn btn-info btn-sm" title="Consultar">
        <i class="fas fa-eye"></i>
      </button>
      <button type="button" class="btn btn-warning btn-sm" title="Modificar">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="btn btn-danger btn-sm" title="Eliminar">
        <i class="fas fa-trash"></i>
      </button>
    </td>
  `;
  cuerpoTabla.appendChild(fila);
});

// Agregar el encabezado y el cuerpo a la tabla
tabla.appendChild(encabezado);
tabla.appendChild(cuerpoTabla);

// Agregar la tabla al div
divTabla.appendChild(tabla);
