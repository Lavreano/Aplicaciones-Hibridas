import mongoose from "mongoose";

const empresaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    industria: { type: String, required: true },
    ubicacion: String,
    tipo_contenido: [String]
});

const Empresa = mongoose.model('Empresa', empresaSchema);

export default Empresa;
