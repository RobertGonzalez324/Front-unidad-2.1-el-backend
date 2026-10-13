// rutas/productoRutas.js
const express = require("express");
const {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto,
} = require("../controladores/productoControlador");
const { proteger, soloAdmin } = require("../middlewares/authMiddleware"); // Importar middleware de autenticación
const router = express.Router();

// Ruta protegida para crear productos (cualquier usuario autenticado puede vender)
router.post("/productos", proteger, crearProducto);

// Ruta pública para obtener productos
router.get("/productos", obtenerProductos);

// Ruta protegida para actualizar productos (admin o propietario)
router.put("/productos/:id", proteger, actualizarProducto);

// Ruta protegida para eliminar productos (admin o propietario)
router.delete("/productos/:id", proteger, eliminarProducto);

module.exports = router;
