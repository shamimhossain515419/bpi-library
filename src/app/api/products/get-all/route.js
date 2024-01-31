import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const dynamic = "force-dynamic";
export async function GET(req) {

     try {
          const product = await prisma.product.findMany()
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
