import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connect from './database/conn.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config()

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


connect().then(() => {
	const port = process.env.PORT || 8080;
	try {
		app.listen(port, () => console.log(`Server started on port ${port}`))
	} catch (err) {
		console.log(err)
	}
})

