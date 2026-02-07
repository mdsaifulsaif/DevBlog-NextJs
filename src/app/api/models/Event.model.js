import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt auto add hobe
  },
);

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
