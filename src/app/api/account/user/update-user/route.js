<<<<<<< HEAD
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
=======
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function PUT(req, res) {
  try {
    const data = await req.json();
    console.log(data);
    const {
      email,
      name,
      department,
      roll,
      phone,
      session,
      group,
      reg,
      shift,
      address,
      semester,
    } = data;

    const findSingleUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (findSingleUser) {
      // Update the user data
      const updatedUser = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          name: name ? name : findSingleUser?.name,
          department: department ? department : findSingleUser?.department,
          roll: roll ? roll : findSingleUser?.roll,
          phone: phone ? phone : findSingleUser?.phone,
          session: session ? session : findSingleUser?.session,
          group: group ? group : findSingleUser?.group,
          semester: semester ? semester : findSingleUser?.semester,
          reg: reg ? reg : findSingleUser?.reg,
          shift: shift ? shift : findSingleUser?.shift,
          address: address ? address : findSingleUser?.address,
        },
      });

      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: "User updated successfully",
        data: updatedUser,
      });
    } else {
      return NextResponse.json({
        stateCode: 404,
        success: false,
        message: "User not found",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      stateCode: 500,
      success: false,
      message: "Internal server error",
>>>>>>> origin/main
    });
  }
}
