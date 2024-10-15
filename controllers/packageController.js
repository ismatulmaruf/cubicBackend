import Package from "../models/PackageModel.js"; // Correct casing

// Fetch all packages
export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find({});
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch packages" });
  }
};

// Fetch a specific package by ID
export const getPackageById = async (req, res) => {
  try {
    const pack = await Package.findById(req.params.id);
    if (pack) {
      res.json(pack);
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch package" });
  }
};

// Update a specific package
export const updatePackage = async (req, res) => {
  const {
    title,
    description,
    services,
    imageUrl,
    price,
    duration,
    accommodation,
    serviceLevel,
  } = req.body;

  try {
    const pack = await Package.findById(req.params.id);

    if (pack) {
      pack.title = title;
      pack.description = description;
      pack.services = services;
      pack.imageUrl = imageUrl;
      pack.price = price;
      pack.duration = duration;
      pack.accommodation = accommodation;
      pack.serviceLevel = serviceLevel;

      const updatedPackage = await pack.save();
      res.json(updatedPackage);
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update package" });
  }
};
