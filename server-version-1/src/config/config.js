import dotenv from "dotenv";

dotenv.config({ quiet: true });

const config = {
	port: process.env.PORT || "",
	mongodb_uri: process.env.MONGODB_URI || "",
};

export default config;
