import express from 'express';
import { createCategoria, deleteCategoria, getAllCategorias, getCategoriaById, updateCategoria } from "../controllers/categoriaController.js";

const router = express.Router();

// Retorna todas las categorías
router.get('/', getAllCategorias);

// Agregar una categoría
router.post('/', createCategoria);

// Obtener una categoría por ID
router.get('/:id', getCategoriaById);

// Actualizar una categoría por ID
router.put('/:id', updateCategoria);

// Eliminar una categoría por ID
router.delete('/:id', deleteCategoria);

export default router;
