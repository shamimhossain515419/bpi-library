import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const title = searchParams.get("title");

    const getAllData = await prisma.books.findMany({
      where: {
        AND: [{ name: { contains: name } }, { title: { contains: title } }],
      },
    });
    if (getAllData) {
      return NextResponse.json({
        stateCode: 200,
        success: true,
        massage: "Get all prodcut success",
        data: getAllData,
      });
    } else {
      return NextResponse.json({
        stateCode: 301,
        success: false,
        message: `Not get  Books please try agin `,
      });
    }
  } catch (e) {
    return NextResponse.json({
      stateCode: 404,
      success: false,
      message: ` ${e} Something went wrong ! Please try again later`,
    });
  }
}
