import mongoose from "mongoose";

const homeSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    subcontent: { type: String, required: true },
    bgImage: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const Home = mongoose.model("Slide", homeSchema);

export default Home;
