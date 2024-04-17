import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";
export async function PUT(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id, "ddddddd");

  try {
    const updatedUserBookData = await prisma.userBooks.updateMany({
      where: {
        id: id,
      },
      data: {
        status: true,
      },
    });
    return NextResponse.json({
      statusCode: 200,
      success: true,
      message: "successfully updated user book",
      data: updatedUserBookData,
    });
  } catch (e) {
    return NextResponse.json({
      statusCode: 404,
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
