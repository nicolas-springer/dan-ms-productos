import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProveedorById(id) {
  try {
    return await prisma.proveedor.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getProveedorByNombre(nombre) {
  try {
    return await prisma.proveedor.findMany({
      where: {
        nombre: { contains: nombre },
      },
    });
  } catch (error) {
    throw error;
  }
}

export default { 
  getProveedorById,
  getProveedorByNombre 
};
