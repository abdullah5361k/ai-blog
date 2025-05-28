import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";

export const GET = async () => {
  const db = await connectToDatabase();
  console.log("DB  ", db);

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
};
