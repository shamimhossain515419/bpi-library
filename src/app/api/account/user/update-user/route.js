// Import necessary modules
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
export const dynamic = 'force-dynamic';
// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Define the PATCH function to handle the request
export async function PUT(req) {
  try {
    // Parse the JSON data from the request body
    const requestData = await req.json();

    // Extract necessary data from the request body

    // Update the data in the database
    const updatedStudent = await prisma.user.update({
      where: {
        email: requestData?.email,
      },
      data: requestData,
    });

    // Return a successful response
    return NextResponse.json({
      statusCode: 200,
      success: true,
      message: 'Student information updated successfully',
      data: updatedStudent,
    });
  } catch (e) {
    // Return an error response if an exception occurs
    return NextResponse.json({
      statusCode: 500,
      success: false,
      message: `Something went wrong! Please try again later. Error: ${e.message}`,
    });
  }
}
