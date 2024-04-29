import Colaboracion from "../models/colaboracionModel.js";

// Función para crear una nueva colaboración
async function createColaboracion(req, res) {
    try {
        const newColaboracion = new Colaboracion(req.body);
        await newColaboracion.save();
        res.status(201).json(newColaboracion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear colaboración' });
    }
}

// Función para obtener todas las colaboraciones
async function getAllColaboraciones(req, res) {
    try {
        const colaboraciones = await Colaboracion.find();
        res.status(200).json(colaboraciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener colaboraciones' });
    }
}

// Función para obtener una colaboración por su ID
async function getColaboracionById(req, res) {
    try {
        const colaboracionId = req.params.id;
        const colaboracion = await Colaboracion.findById(colaboracionId);
        if (colaboracion) {
            res.status(200).json(colaboracion);
        } else {
            res.status(404).json({ error: 'Colaboración no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener colaboración por ID' });
    }
}

// Función para actualizar una colaboración por su ID
async function updateColaboracion(req, res) {
    try {
        const colaboracionId = req.params.id;
        const newData = req.body;
        const updatedColaboracion = await Colaboracion.findByIdAndUpdate(colaboracionId, newData, { new: true });
        if (updatedColaboracion) {
            res.status(200).json(updatedColaboracion);
        } else {
            res.status(404).json({ error: 'Colaboración no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar colaboración' });
    }
}

// Función para eliminar una colaboracion por su ID
async function deleteColaboracion(req, res) {
    try {
        const colaboracionId = req.params.id;
        const deletedColaboracion = await Colaboracion.findByIdAndDelete(colaboracionId);
        if (deletedColaboracion) {
            res.status(200).json({ mensaje: 'Colaboración eliminada correctamente' });
        } else {
            res.status(404).json({ error: 'Colaboración no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar colaboración' });
    }
}

// Exporta las funciones del controlador de colaboraciones
export { createColaboracion, getAllColaboraciones, getColaboracionById, updateColaboracion, deleteColaboracion };
