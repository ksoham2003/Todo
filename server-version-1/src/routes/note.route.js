import { Router } from "express";
import {
	createNote,
	deleteNote,
	getAllNotes,
	updateNote,
} from "../controllers/note.controller.js";

const router = Router();

// Health check for this route
router.get("/check", (_, res) => {
	res.send("Note route is working");
});

/**
 * path: /api/note/ (POST)
 * des: Used to create single note
 */
router.post("/", createNote);

/**
 * path: /api/note/ (GET)
 * des: Used to fetch all notes
 */
router.get("/", getAllNotes);

/**
 * path: /api/note/ (PATCH)
 * des: Used to update single note using id
 */
router.patch("/:id", updateNote);

/**
 * path: /api/note/ (DELETE)
 * des: Used to create delete single note using id
 */
router.delete("/:id", deleteNote);

export default router;
