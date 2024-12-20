import mongoose from "mongoose";

const comicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      requiered: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comic", comicSchema);
