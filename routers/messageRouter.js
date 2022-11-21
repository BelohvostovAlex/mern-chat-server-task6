import { Router } from "express";

import messageController from "../controllers/messageController.js";

const router = new Router();

router.post("/new", messageController.createMessage);
router.get("/:dialogueId", messageController.getMessages);

export default router;
