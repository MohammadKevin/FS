import express from "express";
import {
    getSettings,
    addSettings,
    updateSettings,
    deleteSettings,
}from "../controller/setting.controller.js";

const router = express.Router();

router.get("/", getSettings);
router.post("/add", addSettings);
router.put("/update", updateSettings);
router.delete("/delete", deleteSettings);

export default router;