import express from 'express';
import { createUsuario, deleteUsuario, getAllUsuarios, getUsuarioById, updateUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

// Retorna todos los usuarios
router.get('/', getAllUsuarios);

// Agregar un usuario
router.post('/', createUsuario);

// Obtener un usuario por ID
router.get('/:id', getUsuarioById);

// Actualizar un usuario por ID
router.put('/:id', updateUsuario);

// Eliminar un usuario por ID
router.delete('/:id', deleteUsuario);

export default router;
