import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await prisma.post.findMany({
      include: {
        User: true, // Include the User relation
      },
    });

    if (data) {
      return NextResponse.json({
        stateCode: 200,
        success: false,
        data: data,
      });
    } else {
      return NextResponse.json({
        stateCode: 401,
        success: false,
        message: "Fail data  post please try agin",
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
