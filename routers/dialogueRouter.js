import { Router } from "express";

import dialogueController from "../controllers/dialogueController.js";

const router = new Router();

router.post("/create", dialogueController.createDialogue);
router.get("/:userId", dialogueController.getDialogues);

export default router;
