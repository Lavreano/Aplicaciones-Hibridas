import mongoose from "mongoose";

const colaboracionSchema = new mongoose.Schema({
    id_usuario: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', required: true },
    id_empresa: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Empresa', required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    tipo_contenido: { type: String, required: true },
    estado: { type: String, required: true }
});

const Colaboracion = mongoose.model('Colaboracion', colaboracionSchema);

export default Colaboracion;
