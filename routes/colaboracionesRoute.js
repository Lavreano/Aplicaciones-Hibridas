import express from 'express';
import { createColaboracion, deleteColaboracion, getAllColaboraciones, getColaboracionById, updateColaboracion } from "../controllers/colaboracionController.js";

const router = express.Router();

// Retorna todas las colaboraciones
router.get('/', getAllColaboraciones);

// Agregar una colaboración
router.post('/', createColaboracion);

// Obtener una colaboración por ID
router.get('/:id', getColaboracionById);

// Actualizar una colaboración por ID
router.put('/:id', updateColaboracion);

// Eliminar una colaboración por ID
router.delete('/:id', deleteColaboracion);

export default router;
