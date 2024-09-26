import express from "express";
import home from "../models/homeModel.js";

const router = express.Router();

// Get all homes
router.get("/", async (req, res) => {
  try {
    const homes = await home.find({});
    res.json(homes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching homes" });
  }
});

// Create a new home
router.post("/", async (req, res) => {
  const { content, subcontent, bgImage, link } = req.body;

  const newHome = new home({ content, subcontent, bgImage, link });

  try {
    const createdHome = await newHome.save();
    res.status(201).json(createdHome);
  } catch (error) {
    res.status(400).json({ message: "Error creating home" });
  }
});

// Update a home
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { content, subcontent, bgImage, link } = req.body;

  try {
    const existingHome = await home.findById(id);

    if (!existingHome) {
      return res.status(404).json({ message: "Home not found" });
    }

    existingHome.content = content;
    existingHome.subcontent = subcontent;
    existingHome.bgImage = bgImage;
    existingHome.link = link;

    const updatedHome = await existingHome.save();
    res.json(updatedHome);
  } catch (error) {
    res.status(400).json({ message: "Error updating home" });
  }
});

// Delete a home
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const existingHome = await home.findById(id);

    if (!existingHome) {
      return res.status(404).json({ message: "Home not found" });
    }

    await existingHome.remove();
    res.json({ message: "Home removed" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting home" });
  }
});

export default router;
