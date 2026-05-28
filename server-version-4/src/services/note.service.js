import Note from "../models/note.model.js";
import ApiError from "../utils/apiError.js";

export const createNoteService = async (data, id) => {
	// getting all data from frontend
	const { title, description } = data;

	if (!title || !description) {
		// validating data
		throw new ApiError(400, "All fields are required");
	}

	// creating new Note in database
	const newNote = await Note.create({
		title,
		description,
		userId: id,
	});
	return newNote;
};

export const getAllNotesService = async () => {
	// finding all notes in database
	const notes = await Note.find({ isDeleted: false });

	if (!notes || notes.length === 0) {
		throw new ApiError(400, "No notes found");
	}
	return {
		notes,
	};
};

export const updateNoteService = async (params, data, userId) => {
	// getting id from params
	const { id } = params;
	if (!id) {
		throw new ApiError(400, "Id is required");
	}

	//getting data from frontend
	const { title, description } = data;
	if (!title && !description) {
		throw new ApiError(400, "At least title or description is required ");
	}

	//finding note in database using Id from params
	const note = await Note.findOne({ _id: id, isDeleted: false });
	if (!note) {
		throw new ApiError(400, "No notes found");
	}

	// updating existing data with new data
	if (description) note.description = description;
	if (title) note.title = title;
	note.userId = userId;
	await note.save();
};

export const deleteNoteService = async (params) => {
	// getting id from params
	const { id } = params;
	if (!id) {
		throw new ApiError(400, "Id is required");
	}

	// finding and marking the note as deleted using Id from params
	const note = await Note.findOne({ _id: id, isDeleted: false });
	if (!note) {
		throw new ApiError(400, "No notes found");
	}

	note.isDeleted = true;
	note.deletedAt = new Date();
	await note.save();
};
