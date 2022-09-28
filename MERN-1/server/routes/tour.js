import express from "express";
const router = express.Router();

import auth from "../middlewares/auth.js";

import {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  getToursBySearch,
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} from "../controllers/tour.js";

router.post("/", auth, createTour);
router.get("/", getTours);

router.get("/:id", getTour);

router.delete("/:id", auth, deleteTour);

router.patch("/:id", auth, updateTour);

router.get("/userTours/:id", auth, getToursByUser);

// router.get("/search", getToursBySearch);

router.post("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);

router.post("/relatedTours", getRelatedTours);

router.patch("/like/:id", auth, likeTour);
export default router;
