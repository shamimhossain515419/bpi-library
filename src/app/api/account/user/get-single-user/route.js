import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const findSingleUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (findSingleUser) {
      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: "  single user get  successfully",
        data: findSingleUser,
      });
    } else {
      return NextResponse.json({
        stateCode: 402,
        success: false,
        message: "Fail data  post please try agin",
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
