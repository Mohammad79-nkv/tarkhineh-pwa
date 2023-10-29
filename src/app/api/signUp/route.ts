import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../server/utils/dbConnect";
import User from "../../../../server/models/user";
import bcrypt from "bcryptjs";

export const POST = async (request: NextRequest) => {
  const { fullName, email, password } = await request.json();
  await dbConnect();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    fullName,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
