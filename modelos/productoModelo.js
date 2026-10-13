// modelos/productoModelo.js
const mongoose = require("mongoose");

const productoEsquema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  imagen: String,
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

const Producto = mongoose.model("Producto", productoEsquema);

module.exports = Producto;
