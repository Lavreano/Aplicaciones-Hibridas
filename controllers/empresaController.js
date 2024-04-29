import Empresa from "../models/empresaModel.js";

// Función para crear una nueva empresa
async function createEmpresa(req, res) {
    try {
        const newEmpresa = new Empresa(req.body);
        await newEmpresa.save();
        res.status(201).json(newEmpresa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear empresa' });
    }
}

// Función para obtener todas las empresas
async function getAllEmpresas(req, res) {
    try {
        const empresas = await Empresa.find();
        res.status(200).json(empresas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener empresas' });
    }
}

// Función para obtener una empresa por su ID
async function getEmpresaById(req, res) {
    try {
        const empresaId = req.params.id;
        const empresa = await Empresa.findById(empresaId);
        if (empresa) {
            res.status(200).json(empresa);
        } else {
            res.status(404).json({ error: 'Empresa no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener empresa por ID' });
    }
}

// Función para actualizar una empresa por su ID
async function updateEmpresa(req, res) {
    try {
        const empresaId = req.params.id;
        const newData = req.body;
        const updatedEmpresa = await Empresa.findByIdAndUpdate(empresaId, newData, { new: true });
        if (updatedEmpresa) {
            res.status(200).json(updatedEmpresa);
        } else {
            res.status(404).json({ error: 'Empresa no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar empresa' });
    }
}

// Función para eliminar una empresa por su ID
async function deleteEmpresa(req, res) {
    try {
        const empresaId = req.params.id;
        const deletedEmpresa = await Empresa.findByIdAndDelete(empresaId);
        if (deletedEmpresa) {
            res.status(200).json({ mensaje: 'Empresa eliminada correctamente' });
        } else {
            res.status(404).json({ error: 'Empresa no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar empresa' });
    }
}

// Exporta las funciones del controlador de empresas
export { createEmpresa, getAllEmpresas, getEmpresaById, updateEmpresa, deleteEmpresa };
