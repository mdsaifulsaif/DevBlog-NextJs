import { connectDB } from "@/app/lib/db";
import EventModel from "../models/Event.model";

export async function GET() {
  return Response.json({
    success: true,
    message: "API is working ",
  });
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const newPost = await EventModel.create(body);

  return Response.json(newPost);
}
