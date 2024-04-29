import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    etiquetas: [String]
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

export default Categoria;
