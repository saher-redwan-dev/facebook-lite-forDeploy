import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;
    // console.log("userData body:::", userData);

    //Confirm data exists
    if (!userData?.email || !userData?.password || !userData?.image) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // check for duplicate emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await connectMongoDB();
    await User.create(userData);
    return NextResponse.json({ message: "User Created." }, { status: 201 });
  } catch (error) {
    // console.log(err);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
