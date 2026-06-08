[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/NXlVyqLH)
# Ejercicio: Servidor HTTP con Express

Este ejercicio está diseñado para practicar y evaluar tus conocimientos sobre la creación de servidores HTTP utilizando Express.js, manejando rutas, query strings y parámetros de ruta.

## Descripción del Ejercicio

Debés crear un servidor web en Express que escuche en el puerto 3000 y maneje las siguientes rutas:

| Ruta                     | Respuesta                                                       |
| ------------------------ | --------------------------------------------------------------- |
| `/`                      | "Bienvenid@s a nuestro servidor Express!"                       |
| `/productos`             | Arreglo completo de `productos` en formato JSON                 |
| `/productos?categoria=X` | Arreglo de productos filtrado por `categoria=X` en formato JSON |
| `/usuarios/:id`          | Objeto del usuario correspondiente al `id` en formato JSON      |
| Cualquier otra ruta      | Código 404 y mensaje: "No se ha encontrado la ruta ingresada."  |

Para las rutas de productos y usuarios, debes devolver la respuesta en formato JSON (por ejemplo, utilizando `res.json()`).

**Importante sobre Query Strings y Métodos de Arreglo:**
Para la ruta `/productos`, si el cliente **no** envía la query string `categoria`, el servidor debe devolver el arreglo `productos` completo. Si la incluye, debes usar el método de arreglo `filter()` para devolver sólo los productos de esa categoría.
Para la ruta `/usuarios/:id`, debes usar el método `find()` para obtener al usuario. Si el usuario no existe, devuelve un código 404 con el texto `"Usuario no encontrado."`.

**Evaluación y GitHub Classroom:** Ten en cuenta que los _Issues_ que se te asignarán en este repositorio están divididos **por cada endpoint solicitado** (Ruta Raíz, Productos, Productos con Query, Usuarios y 404). Asegúrate de resolver cada ruta para que los tests automáticos cierren cada issue.

## Requisitos Técnicos

1. Utilizar `express` para crear el servidor.
2. Manejar correctamente las rutas, query strings (`req.query`) y parámetros de ruta (`req.params`).
3. Configurar correctamente los encabezados de respuesta.
4. Devolver los códigos de estado HTTP apropiados.

## Estructura del Proyecto

```
proyecto/
│
├── src/
│   └── server.js      # Lógica para crear el servidor Express
│
├── tests/
│   └── server.test.js # Pruebas automatizadas
│
├── index.js           # Punto de entrada que inicia el servidor
├── api.http           # Peticiones HTTP para pruebas manuales
├── package.json       # Configuración y dependencias del proyecto
└── README.md          # Este archivo
```

## Instrucciones para Estudiantes

### Prerrequisitos

- Node.js instalado (versión 14 o superior recomendada)
- npm (generalmente viene con Node.js)

### Pasos para Completar el Ejercicio

1. Cloná o descargá este repositorio.
2. Instalá las dependencias:
   ```bash
   npm install
   ```
3. Implementá la lógica del servidor según los requisitos en los archivos correspondientes:
   - `src/server.js`
   - `index.js`
4. Iniciá el servidor para probarlo manualmente:
   ```bash
   npm start
   ```
5. Para desarrollo con recarga automática:
   ```bash
   npm run dev
   ```
6. Verificá que tu implementación pasa todas las pruebas:
   ```bash
   npm test
   ```

### Cómo Probar Manualmente (api.http)

1. Inicia el servidor: `npm start` (o `npm run dev` para recarga automática).
2. Instala la extensión **REST Client** en VS Code o Cursor.
3. Abre el archivo `api.http` en la raíz del proyecto.
4. Haz clic en "Send Request" encima de cada bloque `###` para ejecutar las peticiones y visualizar las respuestas del servidor.

## Evaluación Automática

Este ejercicio incluye pruebas automatizadas que verificarán si tu implementación cumple con todos los requisitos. Para ejecutar estas pruebas, utiliza el comando:

```bash
npm test
```

## Herramientas de editor (ESLint / Prettier / VS Code)

Este repositorio incluye configuración estandarizada de linters y formateo.

- **Configuración activa**: La raíz del proyecto ya contiene los archivos `.eslintrc.json` y `.prettierrc.js` activos.
- **Referencia**: En la carpeta `Configuration-Files/backend-nodejs/` hay una copia de referencia del estándar.
- **Comandos útiles**:
  - `npm run lint` (verifica errores de código).
  - `npm run format` (aplica el formato correcto con Prettier).

¡Buena suerte con el ejercicio!
