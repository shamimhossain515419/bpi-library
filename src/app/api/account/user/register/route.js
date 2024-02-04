import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";
const key = process.env.ACCESS_TOKEN_SECRET;
export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    const { email } = data || {};

    const findSingleUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log(findSingleUser);

    if (findSingleUser) {
      return NextResponse.json({
        stateCode: 302,
        success: "success",
        message: "user allready exit   please try orther email  or phone ",
        data: findSingleUser,
      });
    }
    const newuser = await prisma.user?.create({ data });
    const token = jwt.sign({ email, key }, "default_secret_key", {
      expiresIn: "20d",
    });

    if (token) {
      const cookieStore = cookies()
      cookieStore.set('accessToken', token)
    } else {
      return NextResponse.json({
        success: false,
        massage: error.details[0].message,
      });
    }

    if (newuser) {
      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: "prodcut added successfully",
        data: newuser,
        token: token,
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
      message: "Something went wrong ! Please try again later",
    });
  }
}
