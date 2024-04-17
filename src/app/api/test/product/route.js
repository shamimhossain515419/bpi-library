import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const data = await req.json();
    const createpost = await prisma.post.create({ data });
    return NextResponse.json({
      stateCode: 200,
      success: true,
      message: "Post created successfully",
      data: createpost,
    });
  } catch (error) {
    console.error("Error creating post:", error);

    return NextResponse.json({
      stateCode: 500,
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}
