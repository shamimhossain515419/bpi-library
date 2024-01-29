import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const dynamic = "force-dynamic";
export async function POST(req) {
     
     try {

          const data = await req.json();
          console.log(data);
          const image = "https://dfgdf.jpg";
          const title = "new product";
          const category = "new brand";
          const price = 233;

          const product = await prisma.product.create({
               data: {
                    image,
                    title,
                    price,
                    category
               }
          })
          
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
