import proveedorService from "../service/ProveedorService.js";

async function obtenerProveedorPorId(req, res) {
  try {
    const id = req.params.id;
    const proveedor = await proveedorService.obtenerProveedorPorId(id);
    
    if (proveedor) {
      res.status(200).json(proveedor);
    } else {
      res.status(404).json({ mensaje: 'Proveedor no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el proveedor.' });
  }
}

async function obtenerProveedorPorNombre(req, res) {
  try {
    const nombre = req.params.nombre;
    const proveedores = await proveedorService.obtenerProveedorPorNombre(nombre);
    res.status(200).json(proveedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los proveedores por nombre.' });
  }
}

export default {
  obtenerProveedorPorId,
  obtenerProveedorPorNombre,
};
