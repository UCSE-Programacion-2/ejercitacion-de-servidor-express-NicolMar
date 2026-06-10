const express = require('express');

const app = express();

const productos = [
  { id: 1, nombre: 'Laptop', categoria: 'electronica' },
  { id: 2, nombre: 'Silla', categoria: 'muebles' },
  { id: 3, nombre: 'Monitor', categoria: 'electronica' },
];

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' },
];

// TODO: Define tus rutas aquí

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenid@s a nuestro servidor Express!');
});

// Ruta productos
app.get('/productos', (req, res) => {
  const { categoria } = req.query;

  if (categoria) {
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);

    return res.json(productosFiltrados);
  }

  return res.json(productos);
});

// Ruta usuarios por id
app.get('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);

  const usuario = usuarios.find((usuarioActual) => usuarioActual.id === id);

  if (!usuario) {
    return res.status(404).send('Usuario no encontrado.');
  }

  return res.json(usuario);
});

// Cualquier otra ruta
app.use((req, res) => {
  res.status(404).send('No se ha encontrado la ruta ingresada.');
});

module.exports = app;
