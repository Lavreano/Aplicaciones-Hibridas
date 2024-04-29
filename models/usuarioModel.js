import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    ubicacion: String,
    habilidades: [String],
    experiencia: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
