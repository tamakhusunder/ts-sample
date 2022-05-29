import { Router } from "express";
import * as contactController from "../core/controllers/contact.controller";

const router = Router();

router.get("/", contactController.getContacts);

export default router;
