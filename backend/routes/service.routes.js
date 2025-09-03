import express from "express";
import {
    getServices,
    addServices,
    updateServices,
    deleteServices,
} from "../controller/service.controller.js";

const router = express.Router();

router.get("/", getServices);          // GET all
router.post("/", addServices);         // POST new
router.put("/:id", updateServices);    // PUT update by id
router.delete("/:id", deleteServices); // DELETE by id

export default router;