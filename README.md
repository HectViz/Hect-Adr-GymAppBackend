# 🏋️‍♂️ GymApp Backend (Enrutamiento, Clases y HTTP)

Este es un backend simple para una aplicación de gestión de clientes y membresías de un gimnasio, desarrollado como tarea académica de backend.

## 🧰 Tecnologías utilizadas

* Node.js
* Express.js (usando express-generator)
* EJS (para vistas)
* Thunder Client (para pruebas de endpoints)
* Javascript
* Controladores basados en clases
* Variables como almacenamiento temporal de datos (sin base de datos)


## 🗂️ Estructura del proyecto

```
hectviz-hect-adr-gymappbackend/
    ├── app.js
    ├── package.json
    ├── bin/
    │   └── www
    ├── controllers/
    │   ├── README.md
    │   ├── ClientesController.js
    │   ├── MembresiasController.js
    │   └── PagoController.js
    ├── models/
    │   ├── README.md
    │   └── data.js
    ├── public/
    │   └── stylesheets/
    │       └── style.css
    ├── routes/
    │   ├── clientes.js
    │   ├── index.js
    │   ├── membresias.js
    │   ├── pagos.js
    │   └── users.js
    └── views/
        ├── error.ejs
        ├── index.ejs
        ├── clientes/
        │   ├── detalle.ejs
        │   └── listar.ejs
        ├── membresias/
        │   ├── detalle.ejs
        │   └── listar.ejs
        └── pagos/
            └── listar.ejs
```


## 📌 Funcionalidades implementadas

✅ Operaciones CRUD

✅ Vistas en EJS para visualizar información

✅ Controladores organizados como clases

✅ Rutas limpias y bien definidas


## 🌐 Endpoints Disponibles
### 👤 Clientes
* GET /clientes - Lista todos los clientes

* GET /clientes/:id - Muestra detalles de un cliente

* POST /clientes - Crea un nuevo cliente

* PUT /clientes/:id - Actualiza un cliente existente

* DELETE /clientes/:id - Elimina un cliente

### 📝 Membresías
* GET /membresias - Lista todas las membresías

* GET /membresias/:id - Muestra detalles de una membresía

* POST /membresias - Crea una nueva membresía

* PUT /membresias/:id - Actualiza una membresía existente

* DELETE /membresias/:id - Elimina una membresía

### 💳 Pagos
* GET /pagos - Lista todos los pagos registrados

* POST /pagos - Registra un nuevo pago


## 🚀 Cómo ejecutar

1. Clonar el repositorio:

```
git clone https://github.com/HectViz/Hect-Adr-GymAppBackend.git
cd Hect-Adr-GymAppBackend
```

2. Instalar dependencias:

```
npm install
```

3. Iniciar el servidor:

```
npm start
```

4. Acceder desde el navegador:

```
http://localhost:3000
```


## 📬 Autor

Desarrollado por **Héctor Villegas** y **Adriel Peralta**


## 📎 Notas finales

Este proyecto **no usa base de datos**, ya que fue diseñado con propósitos didácticos. Toda la información se guarda temporalmente en archivos `.js` dentro de la carpeta `/data`.

