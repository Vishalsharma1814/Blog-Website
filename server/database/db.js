import mongoose from "mongoose";

const connection = async () => {
	try {
		const URL =
			"mongodb+srv://vishal:vishal@cluster0.skv8a.mongodb.net/blog?retryWrites=true&w=majority";
		await mongoose.connect(URL, {
			useNewUrlParser: true,
		});
		console.log("DB connected successfully");
	} catch (error) {
		console.log(error);
	}
};
export default connection;
