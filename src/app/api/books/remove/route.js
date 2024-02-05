import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log(id);

    const deleteBooks = await prisma.books.delete({
      where: {
        id: id,
      },
    });
    console.log(deleteBooks);

    if (deleteBooks) {
      return NextResponse.json({
        success: true,
        message: "Delete  books  successfully",
        data: deleteBooks,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Fail delete  books please try agin",
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
