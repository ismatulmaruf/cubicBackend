// models/PackageModel.js
import mongoose from "mongoose";

const PackageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  secondtitle: {
    type: String,
    required: true,
  },
  services: [
    {
      type: String,
      required: true,
    },
  ],
  bannerimageUrl: {
    type: String,
    required: true,
  },
  secondimageUrl: {
    type: String,
    required: true,
  },

  middleparagraph: {
    type: String,
    required: true,
  },
  servicesdescriptiontitle: {
    type: String,
    required: true,
  },
  servicesdescription: [
    {
      type: String,
      required: true,
    },
  ],
  finalparagraph: {
    type: String,
    required: true,
  },
});

const Package = mongoose.model("Package", PackageSchema);

export default Package;
