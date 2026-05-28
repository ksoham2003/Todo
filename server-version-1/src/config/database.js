import chalk from "chalk";
import mongoose from "mongoose";
import config from "./config.js";

const connectDb = () => {
	try {
		mongoose.connect(config.mongodb_uri);
		console.log(chalk.bgGreen("Database connected"));
	} catch (error) {
		console.log("Error in database connection:", error);
	}
};

export default connectDb;
