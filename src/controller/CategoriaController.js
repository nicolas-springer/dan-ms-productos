import categoriaService from "../service/CategoriaService.js";

async function obtenerCategoriaPorId(req, res) {
  try {
    const id = req.params.id;
    const categoria = await categoriaService.obtenerCategoriaPorId(id);
    
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ mensaje: 'Categoría no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la categoría.' });
  }
}

async function obtenerCategoriaPorNombre(req, res) {
  try {
    const nombre = req.params.nombre;
    const categorias = await categoriaService.obtenerCategoriaPorNombre(nombre);
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las categorías por nombre.' });
  }
}

export default {
  obtenerCategoriaPorId,
  obtenerCategoriaPorNombre,
};
