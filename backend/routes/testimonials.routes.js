import express from "express";
import {
    getTestimonials,
    addTestimonials,
    updateTestimonials,
    deleteTestimonials,
} from "../controller/testimonials.controller.js";

const router = express.Router();

router.get("/", getTestimonials);
router.post("/", addTestimonials);
router.put("/:id", updateTestimonials);
router.delete("/:id", deleteTestimonials);

export default router;