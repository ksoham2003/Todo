import mongoose from "mongoose";

// add validations

const noteSchema = mongoose.Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

const Note = mongoose.model("Notes", noteSchema);

export default Note;
