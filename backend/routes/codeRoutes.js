import express from "express";
import { postCodes, postCodesConcept } from "../controllers/codeController.js";

const router = express.Router();

router.post("/", postCodes);
router.post("/concept", postCodesConcept);

export default router;
