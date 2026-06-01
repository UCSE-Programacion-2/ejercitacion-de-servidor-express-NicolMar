/**
 * Pruebas para el servidor Express
 */
const request = require('supertest');
const server = require('../index');

// Cerrar el servidor después de todas las pruebas
afterAll((done) => {
  server.close(done);
});

describe('Pruebas del servidor Express', () => {
  // Prueba para la ruta raíz
  test('GET / debería devolver texto de bienvenida', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Bienvenid@s a nuestro servidor Express!');
  });

  // Prueba para la ruta /productos
  test('GET /productos debería devolver el arreglo de productos en formato JSON', async () => {
    const response = await request(server).get('/productos');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual([
      { id: 1, nombre: 'Laptop', categoria: 'electronica' },
      { id: 2, nombre: 'Silla', categoria: 'muebles' },
      { id: 3, nombre: 'Monitor', categoria: 'electronica' },
    ]);
  });

  // Prueba para query strings en /productos
  test('GET /productos?categoria=electronica debería devolver productos filtrados en JSON', async () => {
    const response = await request(server).get('/productos?categoria=electronica');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual([
      { id: 1, nombre: 'Laptop', categoria: 'electronica' },
      { id: 3, nombre: 'Monitor', categoria: 'electronica' },
    ]);
  });

  // Prueba para ruta con parámetros en /usuarios/:id
  test('GET /usuarios/2 debería devolver el usuario correspondiente en JSON', async () => {
    const response = await request(server).get('/usuarios/2');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({ id: 2, nombre: 'Maria' });
  });

  // Prueba para usuario no encontrado
  test('GET /usuarios/999 debería devolver 404 y mensaje de error', async () => {
    const response = await request(server).get('/usuarios/999');
    expect(response.status).toBe(404);
    expect(response.text).toMatch(/Usuario no encontrado/);
  });

  // Prueba para rutas no existentes
  test('GET /ruta-no-existente debería devolver 404', async () => {
    const response = await request(server).get('/ruta-no-existente');
    expect(response.status).toBe(404);
  });
});
