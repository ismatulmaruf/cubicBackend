// controllers/homeController.js

import home from "../models/homeModel.js";

// Get all homes
export const getAllHomes = async (req, res) => {
  try {
    const homes = await home.find({});
    res.json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching homes" });
  }
};

export const getAllHomesContact = async (req, res) => {
  try {
    const homes = await home
      .find({})
      .sort({ createdAt: -1 })
      .limit(3)
      .select(
        "ContactSecHeading ContactSecPara ContactSecNumber ContactSecImage"
      ); // Select specific fields

    res.json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching homes" });
  }
};

// Update a home
import { ObjectId } from "mongodb"; // Ensure you import ObjectId

export const updateHome = async (req, res) => {
  const { id } = req.params;
  const {
    Slide,
    secondSecimg1,
    secondSecimg2,
    secondSecPara1,
    secondSecPara2,
    secondSecheading,
    thirdSecheading,
    thirdSecPara,
    ContactSecHeading,
    ContactSecNumber,
    ContactSecPara,
    ContactSecImage,
  } = req.body;

  console.log(req.body); // Check the full request body

  try {
    const existingHome = await home.findById(id);

    if (!existingHome) {
      return res.status(404).json({ message: "Home not found" });
    }

    // Update Slide array if provided
    if (Slide && Slide.length > 0) {
      Slide.forEach((updatedSlide) => {
        const existingSlideIndex = existingHome.Slide.findIndex(
          (slide) => slide._id.toString() === updatedSlide._id
        );

        if (existingSlideIndex > -1) {
          // Update existing slide
          existingHome.Slide[existingSlideIndex] = {
            ...existingHome.Slide[existingSlideIndex],
            ...updatedSlide,
          };
        } else {
          // Add new slide if it doesn't exist
          existingHome.Slide.push(updatedSlide);
        }
      });
    }

    // Update other fields if provided
    if (secondSecimg1) existingHome.secondSecimg1 = secondSecimg1;
    if (secondSecimg2) existingHome.secondSecimg2 = secondSecimg2;
    if (secondSecPara1) existingHome.secondSecPara1 = secondSecPara1;
    if (secondSecPara2) existingHome.secondSecPara2 = secondSecPara2;
    if (secondSecheading) existingHome.secondSecheading = secondSecheading;
    if (thirdSecheading) existingHome.thirdSecheading = thirdSecheading;
    if (thirdSecPara) existingHome.thirdSecPara = thirdSecPara;
    if (ContactSecHeading) existingHome.ContactSecHeading = ContactSecHeading;
    if (ContactSecNumber) existingHome.ContactSecNumber = ContactSecNumber;
    if (ContactSecPara) existingHome.ContactSecPara = ContactSecPara;
    if (ContactSecImage) existingHome.ContactSecImage = ContactSecImage;

    // Save the updated document
    const updatedHome = await existingHome.save();
    res.json(updatedHome);
  } catch (error) {
    console.error("Error updating home:", error); // Log the error for better debugging
    res.status(400).json({ message: "Error updating home" });
  }
};
