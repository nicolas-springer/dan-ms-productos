import categoriaRepository from "../repository/CategoriaRepository.js";

async function obtenerCategoriaPorId(id) {
  return await categoriaRepository.getCategoriaById(id);
}

async function obtenerCategoriaPorNombre(nombre) {
  return await categoriaRepository.getCategoriaByNombre(nombre);
}

export default { 
    obtenerCategoriaPorId, 
    obtenerCategoriaPorNombre 
};
