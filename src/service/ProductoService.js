import productoRepository from "../repository/ProductoRepository.js";

async function crearProducto(producto) {
  return await productoRepository.createProducto(producto);
}

async function obtenerProductos() {
  return await productoRepository.getProductos();
}

async function obtenerProductoPorId(id) {
  return await productoRepository.getProductoById(id);
}

async function obtenerProductoPorNombre(nombre) {
  return await productoRepository.getProductoByNombre(nombre);
}

async function obtenerProductoPorProveedor(proveedorNombre) {
  return await productoRepository.getProductoByProveedor(proveedorNombre);
}

async function obtenerProductoPorCategoria(categoriaNombre) {
  return await productoRepository.getProductoByCategoria(categoriaNombre);
}

async function obtenerProductoPorStockActual(stockActual) {
  return await productoRepository.getProductoByStockActual(stockActual);
}

async function actualizarProducto(id, producto) {
  return await productoRepository.updateProducto(id, producto);
}

async function eliminarProducto(id) {
  return await productoRepository.deleteProducto(id);
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
