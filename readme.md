# Guía

- En la carpeta server se encuentra toda la parte relacionada al backend, es decir, para ejecutar de forma local se require estar ubicado en dicha carpeta (cd server -> command: npm run dev o node app.js)

- Dentro de la carpeta server se encuentra una carpeta llamada imagenesTest, donde la misma contiene imágenes de prueba en Thunder Client para los métodos POST, PUT, GET y DELETE en un entorno local.
  Además de imágenes de esas mismas pruebas con Postman pero ya con el servidor node y la BD en deploy

# Resumen de rutas de API (en Deploy)

- Tanto el servidor de node como la BD están desplegadas en alwaysdata para acceder de forma remota

- Link principal: https://proyectocac.alwaysdata.net/

# Rutas API deploy:

- Para las prendas:

  1. https://proyectocac.alwaysdata.net/api/prendas/ (para métodos http GET y POST)

  2. https://proyectocac.alwaysdata.net/api/prendas/:id (para métodos http GET para un id específico, PUT y DELETE)

- Para las categorías:

  1. https://proyectocac.alwaysdata.net/api/categorias (solo para el método http GET)

- Otras:
  1. https://proyectocac.alwaysdata.net/api/_ donde _ = cualquier otra ruta no especificada anteriormente para las prendas o para las categorías. Dara un mensaje de página no encontrada.

# Importación Base de Datos para entorno local

- Ante cualquier incoveniente en la carpeta server/importarBD se encuentra el script de la BD utilizada para pruebas en un entorno local
