import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const email = searchParams.get("email");
    console.log(email, status);

    if (status === true) {
      const userbookdata = await prisma.userBooks.findMany({
        where: {
          status: true, // Assuming 'status' is a field in your 'userBooks' model
        },
        include: {
          user: { email: email },
          book: true,
        },
      });

      return NextResponse.json({
        statusCode: 200,
        success: true,
        message: "Wow successfully get all userbook ",
        data: userbookdata,
      });
    } else {
      const userbookdata = await prisma.userBooks.findMany({
        where: {
          status: false, // Assuming 'status' is a field in your 'userBooks' model
        },
        include: {
          user: true,
          book: true,
        },
      });

      return NextResponse.json({
        statusCode: 200,
        success: true,
        message: "Wow successfully get all userbook ",
        data: userbookdata,
      });
    }
  } catch (e) {
    return NextResponse.json({
      statusCode: 404,
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
