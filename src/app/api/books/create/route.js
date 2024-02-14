import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const data = await req.json();

    const { name } = data || {};
    console.log(data, name);

    const extingBooks = await prisma.books.findUnique({
      where: {
        name: name,
      },
    });

    if (extingBooks) {
      return NextResponse.json({
        stateCode: 402,
        success: true,
        message: " This product allrady exting",
        data: extingBooks,
      });
    }

    const createBooks = await prisma.books.create({ data });
    if (createBooks) {
      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: "Books added successfully",
        data: createBooks,
      });
    } else {
      return NextResponse.json({
        stateCode: 401,
        success: false,
        message: "Fail data  post please try agin",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      stateCode: 404,
      success: false,
      message: ` ${e} Something went wrong ! Please try again later`,
    });
  }
}
