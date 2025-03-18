import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/utils/mongodb";
import Feedback from "@/utils/model/Feedback";

export async function POST(req: NextRequest) {
    try {
        await connectToDB(); // Ensure DB is connected
        const { description, firstname, lastname } = await req.json(); // Extract email from request body

        if (!description || !firstname || !lastname) {
            return NextResponse.json({ error: "Field are all required" }, { status: 400 });
        }
        // Save new User
        const newUser = new Feedback({ firstname, lastname, description });
        await newUser.save();

        return NextResponse.json({ message: "Thank you" }, { status: 201 });
    } catch (error) {
        console.error("Subscription error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
