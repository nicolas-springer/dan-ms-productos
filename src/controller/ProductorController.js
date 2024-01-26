import productoService from '../service/ProductoService.js';

async function crearProducto(req, res) {
  try {
    const nuevoProducto = req.body;
    const productoCreado = await productoService.crearProducto(nuevoProducto);
    res.status(201).json(productoCreado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto.' });
  }
}

async function obtenerProductos(req, res) {
  try {
    const productos = await productoService.obtenerProductos();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
}

async function obtenerProductoPorId(req, res) {
  try {
    const id = req.params.id;
    const producto = await productoService.obtenerProductoPorId(id);
    
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
}

async function obtenerProductoPorNombre(req, res) {
  try {
    const nombre = req.params.nombre;
    const productos = await productoService.obtenerProductoPorNombre(nombre);
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos por nombre.' });
  }
}

async function obtenerProductoPorProveedor(req, res) {
  try {
    const proveedorNombre = req.params.proveedorNombre;
    const productos = await productoService.obtenerProductoPorProveedor(proveedorNombre);
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos por proveedor.' });
  }
}

async function obtenerProductoPorCategoria(req, res) {
  try {
    const categoriaNombre = req.params.categoriaNombre;
    const productos = await productoService.obtenerProductoPorCategoria(categoriaNombre);
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos por categoría.' });
  }
}

async function obtenerProductoPorStockActual(req, res) {
  try {
    const stockActual = req.params.stockActual;
    const productos = await productoService.obtenerProductoPorStockActual(stockActual);
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos por stock actual.' });
  }
}

async function actualizarProducto(req, res) {
  try {
    const id = req.params.id;
    const productoActualizado = req.body;
    const producto = await productoService.actualizarProducto(id, productoActualizado);

    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
}

async function eliminarProducto(req, res) {
  try {
    const id = req.params.id;
    const productoEliminado = await productoService.eliminarProducto(id);

    if (productoEliminado) {
      res.status(200).json({ mensaje: 'Producto eliminado con éxito.' });
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
}

export default {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  obtenerProductoPorNombre,
  obtenerProductoPorProveedor,
  obtenerProductoPorCategoria,
  obtenerProductoPorStockActual,
  actualizarProducto,
  eliminarProducto,
};
