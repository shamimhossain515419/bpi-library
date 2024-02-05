import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log(id);

    const deleteSingleuser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (deleteSingleuser) {
      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: "  Delete   successfully",
        data: deleteSingleuser,
      });
    } else {
      return NextResponse.json({
        stateCode: 402,
        success: false,
        message: "Fail data  post please try agin",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      stateCode: 404,
      success: false,
      message: `${e}  Something went wrong ! Please try again later`,
    });
  }
}
