import express from "express";
import { shopIndex, shopCreate, shopUpdate, shopDelete } from "./controller/shop.controller.js";

const router = express.Router();

router.get("/shops", shopIndex);
router.post("/shops", shopCreate);
router.put("/shops/:id", shopUpdate);
router.delete("/shops/:id", MovieDelete);

export default router;
