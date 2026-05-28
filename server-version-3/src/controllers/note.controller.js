import asyncHandler from "../middlewares/async.handler.js";
import {
	createNoteService,
	deleteNoteService,
	getAllNotesService,
	updateNoteService,
} from "../services/note.service.js";
import ApiResponse from "../utils/apiResponse.js";

export const createNote = asyncHandler(async (req, res) => {
	const userId = req.user;
	const newNote = await createNoteService(req.body, userId);
	return res
		.status(201)
		.json(new ApiResponse(201, "Created new note", newNote));
});

export const getAllNotes = asyncHandler(async (_, res) => {
	const { notes } = await getAllNotesService();

	return res.status(200).json(new ApiResponse(200, "fetched all notes", notes));
});

export const updateNote = asyncHandler(async (req, res) => {
	await updateNoteService(req.params, req.body, req.user);

	return res.status(200).json(new ApiResponse(200, "updated"));
});

export const deleteNote = asyncHandler(async (req, res) => {
	await deleteNoteService(req.params);
	return res.status(200).json(new ApiResponse(200, "note deleted"));
});
