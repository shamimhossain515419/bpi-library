import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";
const key = process.env.ACCESS_TOKEN_SECRET;
export async function POST(req) {
  try {
    const data = await req.json();
    const { email } = data || {};
    const cookieStore = cookies();
    const findSingleUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (findSingleUser) {
      const token = jwt.sign({ email, key }, "default_secret_key", {
        expiresIn: "20d",
      });

      cookieStore.set("accessToken", token);

      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: "login success",
        data: findSingleUser,
      });
    } else {
      return NextResponse.json({
        stateCode: 402,
        success: false,
        message: "Fail Login  please try agin",
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
