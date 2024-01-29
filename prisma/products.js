import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createProduct = async (image, title, category, price) => {

     const product = await prisma.product.create({
          data: {
               image,
               title,
               price,
               category
          }
     })
     return product;
}
export const GetAllProduct = async () => {

     const products = await prisma.product.findMany();
     return products;
}
export const DeleteProduct = async (id) => {

     const products = await prisma.product.delete({
          where: {
               id: id
          }
     });
     return products;
}