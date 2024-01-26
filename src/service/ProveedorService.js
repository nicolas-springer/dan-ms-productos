import proveedorRepository from "../repository/ProveedorRepository.js";

async function obtenerProveedorPorId(id) {
  return await proveedorRepository.getProveedorById(id);
}

async function obtenerProveedorPorNombre(nombre) {
  return await proveedorRepository.getProveedorByNombre(nombre);
}

export default { 
    obtenerProveedorPorId, 
    obtenerProveedorPorNombre 
};
