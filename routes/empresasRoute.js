import express from 'express';
import { createEmpresa, deleteEmpresa, getAllEmpresas, getEmpresaById, updateEmpresa } from "../controllers/empresaController.js";

const router = express.Router();

// Retorna todas las empresas
router.get('/', getAllEmpresas);

// Agregar una empresa
router.post('/', createEmpresa);

// Obtener una empresa por ID
router.get('/:id', getEmpresaById);

// Actualizar una empresa por ID
router.put('/:id', updateEmpresa);

// Eliminar una empresa por ID
router.delete('/:id', deleteEmpresa);

export default router;
