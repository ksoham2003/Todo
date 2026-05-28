import chalk from "chalk"; // used to get colorful console output
import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDb from "./src/config/database.js";

app.listen(config.port, () => {
	connectDb(); 
	console.log(chalk.bgCyan("Server-1 started on port:", config.port));
});
