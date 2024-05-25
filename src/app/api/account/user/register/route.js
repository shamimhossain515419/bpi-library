import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
export const dynamic = 'force-dynamic';
const key = process.env.ACCESS_TOKEN_SECRET;
export async function POST(req) {
  try {
    const respondata = await req.json();
    const cookieStore = cookies();
    const { email, provider, name } = respondata || {};
    const data = {
      name: respondata?.name,
      email: respondata?.email,
      group: 'A/N',
    };
    //  provider login condition
    if (provider) {
      //  find use provide email in provider login
      const GooglefindSingleUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      // generate jwt token from  email and key
      const token = jwt.sign({ email, key }, 'default_secret_key', {
        expiresIn: '20d',
      });

      //  all ready exit   user session
      if (GooglefindSingleUser) {
        cookieStore.set('accessToken', token);

        return NextResponse.json({
          stateCode: 2000,
          success: 'success',
          message: ' successfully  goole login ',
          data: GooglefindSingleUser,
          token: token,
        });
      } else {
        //  google provider create new user
        const GoolgeLognnewuser = await prisma.user?.create({ data });

        if (GoolgeLognnewuser) {
          cookieStore.set('accessToken', token);

          return NextResponse.json({
            stateCode: 200,
            success: true,
            message: 'prodcut added successfully',
            data: GoolgeLognnewuser,
            token: token,
          });
        } else {
          return NextResponse.json({
            stateCode: 402,
            success: false,
            message: 'Fail data  post please try agin',
          });
        }
      }
    }

    //  email password login
    //  fint user provide email
    const findSingleUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    //  if user allready   registered
    if (findSingleUser) {
      return NextResponse.json({
        stateCode: 302,
        success: 'success',
        message: 'user allready exit   please try orther email  or phone ',
        data: findSingleUser,
      });
    }

    // create new user in emial   and name
    const newuser = await prisma.user?.create({ data });

    if (newuser) {
      return NextResponse.json({
        stateCode: 200,
        success: true,
        message: 'prodcut added successfully',
        data: newuser,
      });
    } else {
      return NextResponse.json({
        stateCode: 402,
        success: false,
        message: 'Fail data  post please try agin',
      });
    }
  } catch (e) {
    return NextResponse.json({
      stateCode: 404,
      success: false,
      message: `${e}Something went wrong ! Please try again later`,
    });
  }
}
