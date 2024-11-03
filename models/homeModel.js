import mongoose from "mongoose";

// Define a schema for a single slide
const slideSchema = mongoose.Schema({
  content: { type: String, required: true },
  subcontent: { type: String, required: true },
  bgImage: { type: String, required: true },
  link: { type: String, required: true },
});

// Define the main home schema
const homeSchema = mongoose.Schema(
  {
    Slide: [slideSchema], // Use the slideSchema here
    secondSecimg1: { type: String, required: true },
    secondSecimg2: { type: String, required: true },
    secondSecPara1: { type: String, required: true },
    secondSecPara2: { type: String, required: true },
    secondSecheading: { type: String, required: true },
    thirdSecheading: { type: String, required: true },
    thirdSecPara: { type: String, required: true },
    ContactSecHeading: { type: String, required: true },
    ContactSecPara: { type: String, required: true },
    ContactSecNumber: { type: String, required: true },
    ContactSecImage: { type: String, required: true },
  },
  { timestamps: true }
);

// Create and export the model
const Home = mongoose.model("Home", homeSchema); // Use "Home" as the model name

export default Home;
