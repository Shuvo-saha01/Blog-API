import mongoose, { model, Schema } from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      maxLength: 60,
      minLength: 2,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
      minLength: 10,
      maxLength: 500,
      trim: true,
    },
    tags: {
      type: String,
      required: [true, "tags is required"],
    },
    image: {
        type: String,
        trim: true,
    }
  },
  {
    timestamps: true,
  }
)

const articles = mongoose.model("articles", articleSchema);

export default articles;
;
