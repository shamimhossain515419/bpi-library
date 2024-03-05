import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const createBook = await req.json();
    const { userId, bookId } = createBook || {};
    const data = { userId, bookId, status: false };
    // if userId && bookId && status
    if (!userId || !bookId) {
      return NextResponse.json({
        stateCode: 404,
        success: false,
        message: ` user and book do not exist`,
      });
    }
    // Check if the user and book exist
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const book = await prisma.books.findUnique({ where: { id: bookId } });
    if (!user || !book) {
      return NextResponse.json({
        stateCode: 404,
        success: false,
        message: ` user and book do not exist`,
      });
    }
    // Add the book to the user
    const userbookdata = await prisma.userBooks.create({ data });
    if (userbookdata) {
      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: `add cart success`,
        data: userbookdata,
      });
    } else {
      return NextResponse.json({
        stateCode: 404,
        success: false,
        message: ` add cart fild please try again`,
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
