// routes/homeRoutes.js
import express from "express";
import {
  getAllHomes,
  updateHome,
  getAllHomesContact,
} from "../controllers/homeController.js"; // Adjust path as needed

const router = express.Router();

router.get("/contact", getAllHomesContact);

// Get all homes
router.get("/", getAllHomes);

// Update a home
router.put("/:id", updateHome);

export default router;
