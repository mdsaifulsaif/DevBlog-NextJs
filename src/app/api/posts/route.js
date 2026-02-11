import { connectDB } from "@/app/lib/db";
import EventModel from "@/app/api/models/Event.model";
// import EventModel from "../models/Event.model";

export async function GET() {
  await connectDB();

  const Events = await EventModel.find();
  return Response.json({
    success: true,
    Events,
    message: "Events fetched sucessfully",
  });
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("BODY FROM FRONTEND:", body); // 👈 এটা দেখো

    const newEvent = await EventModel.create(body);

    return Response.json(newEvent, { status: 201 });
  } catch (error) {
    console.log("REAL ERROR:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
