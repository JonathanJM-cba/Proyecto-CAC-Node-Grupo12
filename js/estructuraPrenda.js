const prendas = [
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
    id: 4,
    categoria: "remera",
    precio: 50700,
    img: "https://reycar.com.ar/fotos_articulos/grandes/TX02.jpg",
    talla: "XL",
    descripcion: "Remera de algodón roja con logo estampado",
    stock: 3,
    tienda: "FashionPlus",
    ubicacion: "Calle Corrientes 1011",
  },
  {
    id: 5,
    categoria: "remera",
    precio: 50600,
    img: "https://http2.mlstatic.com/D_NQ_NP_778625-MLA73277792445_122023-O.webp",
    talla: "M",
    descripcion: "Remera verde con diseño floral",
    stock: 6,
    tienda: "ModaRetro",
    ubicacion: "Av. Santa Fe 567",
  },
  {
    id: 6,
    categoria: "remera",
    precio: 51000,
    img: "https://previews.123rf.com/images/tarzhanova/tarzhanova1511/tarzhanova151100152/48726645-camiseta-de-algod%C3%B3n-a-rayas-amarillas-aislada-sobre-blanco.jpg",
    talla: "M",
    descripcion: "Remera amarilla con rayas",
    stock: 4,
    tienda: "LaTiendaModerna",
    ubicacion: "Calle Sarmiento 234",
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
    img: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-medio-cierre-con-capucha-topper-sherpa-gris-800020165576001-1.jpg",
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
    id: 10,
    categoria: "buzo",
    precio: 53700,
    img: "https://http2.mlstatic.com/D_NQ_NP_664943-MLA72673179419_112023-O.webp",
    talla: "L",
    descripcion: "Buzo rojo con capucha y estampado en el pecho",
    stock: 2,
    tienda: "AlmaArgentina",
    ubicacion: "Av. Independencia 567",
  },
  {
    id: 11,
    categoria: "buzo",
    precio: 53600,
    img: "https://http2.mlstatic.com/D_NQ_NP_979050-MLA69426013857_052023-O.webp",
    talla: "XL",
    descripcion: "Buzo verde militar con bolsillos y cierre",
    stock: 5,
    tienda: "PampaModa",
    ubicacion: "Calle Defensa 234",
  },
  {
    id: 12,
    categoria: "buzo",
    precio: 54000,
    img: "https://acdn.mitiendanube.com/stores/098/554/products/buzo-corazones1-3d6bd723f9c81459b316800108007043-640-0.jpg",
    talla: "M",
    descripcion: "Buzo rosa con estampado de corazones",
    stock: 3,
    tienda: "RosaModa",
    ubicacion: "Av. Corrientes 789",
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
    tienda: "TangoStyle",
    ubicacion: "Av. Rivadavia 789",
  },
  {
    id: 15,
    categoria: "pantalon",
    precio: 53000,
    img: "https://acdn.mitiendanube.com/stores/001/164/761/products/photoroom-20221121_1427211-395d679324dd920e4016690523495611-240-0.png",
    talla: "L",
    descripcion: "Pantalón negro de jeans",
    stock: 6,
    tienda: "GauchoGlam",
    ubicacion: "Calle Corrientes 1011",
  },
  {
    id: 16,
    categoria: "pantalon",
    precio: 52950,
    img: "https://media.idkids.fr/media/productstorage/images/okaidi/0675571/thumbs/0359773_500.jpg",
    talla: "XL",
    descripcion: "Pantalón de tela rojo con cordón en la cintura",
    stock: 1,
    tienda: "BuenosAiresBoutique",
    ubicacion: "Av. Santa Fe 567",
  },
  {
    id: 17,
    categoria: "pantalon",
    precio: 52700,
    img: "https://www.puntosport.com.ar/17995-large_default/pantalon-salomn-hombre-algodon-swop-graphic-pant-ii-verde-camo-print-17215.jpg",
    talla: "S",
    descripcion: "Pantalón verde militar de algodón",
    stock: 10,
    tienda: "PatagoniaFashion",
    ubicacion: "Calle Sarmiento 234",
  },
  {
    id: 18,
    categoria: "pantalon",
    precio: 53050,
    img: "https://acdn.mitiendanube.com/stores/002/292/081/products/1-2022-11-25t122432-09421-695606b3eb2601858216694029231334-1024-1024.jpg",
    talla: "M",
    descripcion: "Pantalón beige de tela con bolsillos traseros",
    stock: 5,
    tienda: "MarDelPlataModa",
    ubicacion: "Av. Belgrano 456",
  },
  {
    id: 19,
    categoria: "shorts",
    precio: 52000,
    img: "https://http2.mlstatic.com/D_NQ_NP_685197-MLA71748464856_092023-O.webp",
    talla: "M",
    descripcion: "Shorts deportivos azul marino",
    stock: 7,
    tienda: "CórdobaChic",
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
    tienda: "TredyTango",
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
    tienda: "GauchoFashion",
    ubicacion: "Av. Independencia 567",
  },
  {
    id: 22,
    categoria: "shorts",
    precio: 52150,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDMysxf4kQCatGtY87OPm7QlL94dAKSGGjj-A544dUg&s",
    talla: "S",
    descripcion: "Shorts rojos deportivos con franjas blancas",
    stock: 2,
    tienda: "ElRoperoArgentino",
    ubicacion: "Calle Defensa 234",
  },
  {
    id: 23,
    categoria: "shorts",
    precio: 51900,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8c%2Fdd%2F8cdda757c85819b100723ba5dc5ccb2eae685331.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    talla: "M",
    descripcion: "Shorts cortos verde claro de algodón",
    stock: 5,
    tienda: "BoutiqueTango",
    ubicacion: "Av. Corrientes 789",
  },
  {
    id: 24,
    categoria: "shorts",
    precio: 52500,
    img: "https://acdn.mitiendanube.com/stores/001/661/615/products/69af650a-9aa9-4546-856c-497a784bd743-97e35c65edca68fa4a17151846842301-1024-1024.jpg",
    talla: "L",
    descripcion: "Shorts cortos de jean con roturas",
    stock: 8,
    tienda: "AlmaArgentina",
    ubicacion: "Av. de Mayo 123",
  },
];

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
  btnAgregar.textContent = "AGREGAR";
  btnAgregar.addEventListener("click", () => {
    // Lógica para agregar la prenda al carrito
    console.log(`Agregando ${prenda.descripcion} al carrito`);
  });
  divPrenda.appendChild(btnAgregar);

  listPrendas.appendChild(divPrenda);
});
