import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getCategoriaById(id) {
  try {
    return await prisma.categoria.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getCategoriaByNombre(nombre) {
  try {
    return await prisma.categoria.findMany({
      where: {
        nombre: { contains: nombre },
      },
    });
  } catch (error) {
    throw error;
  }
}

export default { 
    getCategoriaById, 
    getCategoriaByNombre 
};
