import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const SngleBooks = await prisma.books.findUnique({
      where: {
        id: id,
      },
      include: {
        UserBooks: {
          include: {
            user: true,
          },
        },
      },
    });

    if (SngleBooks) {
      return NextResponse.json({
        success: true,
        message: "get   signle prodcut  successfully",
        data: SngleBooks,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Fail data  get single books please try agin",
      });
    }
  } catch (e) {
    return NextResponse.json({
      stateCode: 404,
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
