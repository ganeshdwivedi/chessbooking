import argon2 from "argon2"
import User from "@/model/userModel";
import connect from "@/congfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "@/congfig/generateToken";

interface user {
    email:string,
    password:string,
}
export async function POST(request:NextRequest) {
    await connect();
    const { email, password } = await request.json();

    try {
        const isExist = await User.findOne({ email: email });
        if (!isExist) {
            return NextResponse.json({ message: "no such user find" },{ status: 400 })
        }
        const user:user= await User.findOne({ email: email });
        console.log(user);
        const valid = await argon2.verify(user.password, password);
        console.log(valid);
        if (!valid) {
            console.log("error in password");
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }
        return NextResponse.json({
            token: generateToken(
                user.email
            )
        },{ status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}