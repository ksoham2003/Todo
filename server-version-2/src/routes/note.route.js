import { Router } from "express";
import {
	createNote,
	deleteNote,
	getAllNotes,
	updateNote,
} from "../controllers/note.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Health check for this route
router.get("/check", (_, res) => {
	res.send("Note route is working");
});

/**
 * path: /api/note/ (POST)
 * des: Used to create single note
 */
router.post("/", authMiddleware, createNote);

/**
 * path: /api/note/ (GET)
 * des: Used to fetch all notes
 */
router.get("/", authMiddleware, getAllNotes);

/**
 * path: /api/note/ (PATCH)
 * des: Used to update single note using id
 */
router.patch("/:id", authMiddleware, updateNote);

/**
 * path: /api/note/ (DELETE)
 * des: Used to create delete single note using id
 */
router.delete("/:id", authMiddleware, deleteNote);

export default router;
