import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const dynamic = "force-dynamic";
export async function DELETE(req) {

     try {

          const { searchParams } = new URL(req.url);
          console.log(searchParams);
          const id = searchParams.get("id");
          console.log(id);
          const product = await prisma.product.delete({
               where: {
                    id: id
               }
          })
      console.log(product);
          return NextResponse.json({
               success: true,
               message: "success",
               data: product
          });

     } catch (e) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
