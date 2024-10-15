import express from "express";
import {
  getAllPackages,
  getPackageById,
  updatePackage,
} from "../controllers/packageController.js";

const router = express.Router();

// @desc Fetch all packages
// @route GET /api/packages
router.get("/", getAllPackages);

// @desc Fetch a specific package by ID
// @route GET /api/packages/:id
router.get("/:id", getPackageById);

// @desc Update a specific package
// @route PUT /api/packages/:id
router.put("/:id", updatePackage);

export default router;
