import express from "express";
import noteRoute from "../src/routes/note.route.js";

const app = express();
app.use(express.json());

app.get("/check", (_, res) => { // Health check of server
	res.send("Notes route is working (server variation 1)");
});

app.use("/api/note", noteRoute);

// Global error handler
app.use((err, __, res, _) => {
	const statusCode = err.statusCode || 500;
	const errorMessage = err.message || "Internal Server Error";

	return res.status(statusCode).json({
		message: errorMessage,
		errors: err.errors || [],
	});
});

export default app;
