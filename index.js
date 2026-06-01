const app = require('./src/server');

const PORT = 3000;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});

module.exports = server;
