import Note from "../models/note.model.js";

export const createNote = async (req, res, next) => {
	try {
		// getting all data from frontend
		const { title, description } = req.body;

		// validating data
		if (!title || !description) {
			return res.status(400).json({
				message: "All fields are required",
			});
		}

		// creating new Note in database
		const newNote = await Note.create({
			title,
			description,
		});

		return res.status(201).json({
			message: "Created new note",
			newNote,
		});
	} catch (error) {
		next(error);
	}
};

export const getAllNotes = async (_, res) => {
	// finding all notes in database
	const notes = await Note.find();

	if (!notes || notes.length === 0) {
		return res.status(400).json({
			message: "No notes found",
		});
	}

	return res.status(200).json({ message: "fetched all notes", notes });
};

export const updateNote = async (req, res, next) => {
	try {
		// getting id from params
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({
				message: "Id is required",
			});
		}

		//getting data from frontend
		const { title, description } = req.body;
		if (!title && !description) {
			return res.status(400).json({
				message: "At least title or description is required",
			});
		}

		//finding note in database using Id from params
		const note = await Note.findById(id);
		if (!note) {
			return res.status(400).json({
				message: "Notes not found",
			});
		}

		// updating existing data with new data
		note.description = description;
		note.title = title;
		await note.save();

		return res.status(200).json({ message: "updated" });
	} catch (error) {
		next(error);
	}
};

export const deleteNote = async (req, res, next) => {
	try {
    // getting id from params
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({
				message: "Id is required",
			});
		}

    // finding and deleting the note using Id from params
		await Note.findByIdAndDelete(id);

		return res.status(200).json({ message: "note deleted" });
	} catch (error) {
		next(error);
	}
};
