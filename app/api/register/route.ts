// app/api/register/route.ts
import { NextResponse } from "next/server";
import mongooseConnect from "@/lib/mongoose";
import User from "@/models/User.model";
import { z } from "zod";
import { passwordHashing } from "@/utils/backend";


const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be ≤ 50 characters"),
  email: z
    .string()
    .email("Must be a valid email address")
    .max(254, "Email is too long"), // RFC-3696 practical limit
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    // Requires 1 upper, 1 lower, 1 digit, 1 special char
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
      "Password must include upper-case, lower-case, number and symbol"
    ),
});



export async function POST(request: Request) {
  try {
    // Parse & validate in one step
    const body = await request.json();
    const parse = registerSchema.safeParse(body);

    if (!parse.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: parse.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, password } = parse.data; // strongly-typed

    await mongooseConnect();

    if (await User.exists({ email })) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await passwordHashing(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      { message: "User created successfully", userId: user._id, userName: user.name, userEmail: user.email },
      { status: 201 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
