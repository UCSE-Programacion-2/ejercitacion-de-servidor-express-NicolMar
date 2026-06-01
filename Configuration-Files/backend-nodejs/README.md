# Configuración para Proyectos Backend (Node.js + Express + MongoDB)

Esta configuración está optimizada para proyectos backend con Express y MongoDB.

## 🚀 Instalación

1. Copia todos los archivos de esta carpeta a tu proyecto
2. Renombra `.env.example` a `.env` y configura tus variables de entorno
3. Abre una terminal en la carpeta del proyecto y ejecuta:
   ```bash
   npm install
   ```
4. Abre VS Code y acepta instalar las extensiones recomendadas
5. ¡Listo!

## ✨ Características

- ✅ **ESLint** con reglas de Airbnb para Node.js
- ✅ **Prettier** para formateo automático
- ✅ **Node.js --watch** para desarrollo con auto-reload (nativo)
- ✅ **MongoDB extension** para VS Code
- ✅ Formateo y corrección automática al guardar
- ✅ Soporte para variables de entorno con `process.loadEnvFile()` (nativo)

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor en producción
- `npm run dev` - Inicia el servidor en desarrollo con auto-reload (usa `node --watch` nativo)
- `npm run lint` - Revisa el código en busca de errores
- `npm run lint:fix` - Corrige automáticamente errores
- `npm run format` - Formatea todo el código
- `npm run format:check` - Verifica el formato

## 🗄️ Dependencias Incluidas

- **express** - Framework web para Node.js
- **mongoose** - ODM para MongoDB

## 🔧 Configuración de MongoDB

La extensión de MongoDB para VS Code te permite:

- Conectar a bases de datos MongoDB
- Explorar colecciones
- Ejecutar consultas directamente desde VS Code

## 🎯 Reglas Especiales

- `console.log` permitido (útil para debugging en backend)
- `_id` permitido en variables (común en MongoDB)
- Reglas optimizadas para código de servidor

## 🎯 Ideal para

- APIs REST con Express
- Backends con MongoDB
- Servidores Node.js
- Proyectos full-stack
