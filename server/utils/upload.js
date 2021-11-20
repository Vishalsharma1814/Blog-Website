import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
	url: `mongodb+srv://vishal:vishal@cluster0.skv8a.mongodb.net/blog?retryWrites=true&w=majority`,
	// url: 'mongodb://localhost:27017/image-upload',
	options: { useUnifiedTopology: true, useNewUrlParser: true },
	file: (request, file) => {
		const match = ["image/png", "image/jpg", "image/jpeg"];

		if (match.indexOf(file.memeType) === -1)
			return `${Date.now()}-blog-${file.originalname}`;

		return {
			bucketName: "photos",
			filename: `${Date.now()}-blog-${file.originalname}`,
		};
	},
});

export default multer({ storage });
