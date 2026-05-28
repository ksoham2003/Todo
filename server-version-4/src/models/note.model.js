import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Title is required"],
		},
		description: {
			type: String,
			required: [true, "Description is required"],
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: [true, "userId is required"],
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
		deletedAt: {
			type: Date,
			default: null,
		},
	},
	{
		timestamps: true,
	},
);

const Note = mongoose.model("Notes", noteSchema);

export default Note;
