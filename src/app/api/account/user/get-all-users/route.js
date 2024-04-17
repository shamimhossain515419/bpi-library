import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function GET(req, res) {
  try {
    const allUser = await prisma.user.findMany();

    return NextResponse.json({
      statusCode: 200,
      success: true,
      message: "Wow successfully get all users ",
      data: allUser,
    });
  } catch (e) {
    return NextResponse.json({
      statusCode: 404,
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
