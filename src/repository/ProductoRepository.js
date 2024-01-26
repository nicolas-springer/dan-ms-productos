import { PrismaClient } from "@prisma/client";
import e from "express";

const prisma = new PrismaClient();

async function createProducto(producto) {
  try {
    return await prisma.producto.create({
      data: {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        stockActual: producto.stockActual,
        proveedor: { connect: { id: producto.proveedorId } },
        categoria: { connect: { id: producto.categoriaId } }
      }
    });
  } catch (error) {
    throw error;
  }
}

async function getProductos() {
  try {
    return await prisma.producto.findMany({
      include: {
        proveedor: true,
        categoria: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getProductoById(id) {
  try {
    return await prisma.producto.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        proveedor: true,
        categoria: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getProductoByNombre(nombre) {
  try {
    return await prisma.producto.findMany({
      where: {
        nombre: {
          contains: nombre,
        },
      },
      include: {
        proveedor: true,
        categoria: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getProductoByProveedor(proveedorNombre) {
  try {
    return await prisma.producto.findMany({
      where: {
        proveedor: {
          nombre: {
            contains: proveedorNombre,
          },
        },
      },
      include: {
        proveedor: true,
        categoria: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getProductoByCategoria(categoriaNombre) {
  try {
    return await prisma.producto.findMany({
      where: {
        categoria: {
          nombre: categoriaNombre,
        },
      },
      include: {
        proveedor: true,
        categoria: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getProductoByStockActual(stockActual) {
  try {
    return await prisma.producto.findMany({
      where: {
        stockActual: parseInt(stockActual),
      },
      include: {
        proveedor: true,
        categoria: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateProducto(id, producto) {
  try {
    return await prisma.producto.update({
      where: { id: parseInt(id) },
      data: {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        stockActual: producto.stockActual,
        proveedor: { connect: { id: producto.proveedorId } },
        categoria: { connect: { id: producto.categoriaId } },
      },
    });
  } catch (error) {
    throw error;
  }
}

async function deleteProducto(id) {
  try {
    return await prisma.producto.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createProducto,
  getProductos,
  getProductoById,
  getProductoByNombre,
  getProductoByProveedor,
  getProductoByCategoria,
  getProductoByStockActual,
  updateProducto,
  deleteProducto,
};