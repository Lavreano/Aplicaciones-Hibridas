import Usuario from "../models/usuarioModel.js";

// Función para crear un nuevo usuario
async function createUsuario(req, res) {
    try {
        const newUsuario = new Usuario(req.body);
        await newUsuario.save();
        res.status(201).json(newUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
}

// Función para obtener todos los usuarios
async function getAllUsuarios(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
}

// Función para obtener un usuario por su ID
async function getUsuarioById(req, res) {
    try {
        const usuarioId = req.params.id;
        const usuario = await Usuario.findById(usuarioId);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener usuario por ID' });
    }
}

// Función para actualizar un usuario por su ID
async function updateUsuario(req, res) {
    try {
        const usuarioId = req.params.id;
        const newData = req.body;
        const updatedUsuario = await Usuario.findByIdAndUpdate(usuarioId, newData, { new: true });
        if (updatedUsuario) {
            res.status(200).json(updatedUsuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
}

// Función para eliminar un usuario por su ID
async function deleteUsuario(req, res) {
    try {
        const usuarioId = req.params.id;
        const deletedUsuario = await Usuario.findByIdAndDelete(usuarioId);
        if (deletedUsuario) {
            res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
}

// Exportar las funciones del controlador de usuarios
export { createUsuario, getAllUsuarios, getUsuarioById, updateUsuario, deleteUsuario };
