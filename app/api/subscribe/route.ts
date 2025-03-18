import { NextRequest, NextResponse } from "next/server";
import Subscribe from "@/utils/model/Subscribe";
import { connectToDB } from "@/utils/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectToDB(); // Ensure DB is connected
    const { email } = await req.json(); // Extract email from request body

    if (!email ) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if the email already exists
    const existingSubscriber = await Subscribe.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: "Already subscribed" }, { status: 409 });
    }

    // Save new Subscribe
    const newSubscribe = new Subscribe({ email });
    await newSubscribe.save();

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 201 });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
