import Categoria from "../models/categoriaModel.js";

// Función para crear una nueva categoría
async function createCategoria(req, res) {
    try {
        const newCategoria = new Categoria(req.body);
        await newCategoria.save();
        res.status(201).json(newCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear categoría' });
    }
}

// Función para obtener todas las categorías
async function getAllCategorias(req, res) {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener categorías' });
    }
}

// Función para obtener una categoría por su ID
async function getCategoriaById(req, res) {
    try {
        const categoriaId = req.params.id;
        const categoria = await Categoria.findById(categoriaId);
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener categoría por ID' });
    }
}

// Función para actualizar una categoría por su ID
async function updateCategoria(req, res) {
    try {
        const categoriaId = req.params.id;
        const newData = req.body;
        const updatedCategoria = await Categoria.findByIdAndUpdate(categoriaId, newData, { new: true });
        if (updatedCategoria) {
            res.status(200).json(updatedCategoria);
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar categoría' });
    }
}

// Función para eliminar una categoría por su ID
async function deleteCategoria(req, res) {
    try {
        const categoriaId = req.params.id;
        const deletedCategoria = await Categoria.findByIdAndDelete(categoriaId);
        if (deletedCategoria) {
            res.status(200).json({ mensaje: 'Categoría eliminada correctamente' });
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar categoría' });
    }
}

// Exporta las funciones del controlador de categorías
export { createCategoria, getAllCategorias, getCategoriaById, updateCategoria, deleteCategoria };
