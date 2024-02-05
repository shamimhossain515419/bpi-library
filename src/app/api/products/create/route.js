import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    console.log("first");

    const title = "tiadfadftlddfe";
    const price = 20335453440.34;
    const category = "cadfgdfaadftegory";
    const image = "imaadfgadfgeadf";
    const newPost = { title, price, category, image };

    const prodcutResult = await prisma.product.create({data});
    console.log(prodcutResult);

    if (prodcutResult) {
      return NextResponse.json({
        success: true,
        message: "prodcut added successfully",
        data: prodcutResult,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Fail data  post please try agin",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      stateCode: 404,
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
