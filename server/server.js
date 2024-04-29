import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connect from './database/conn.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import {app, server} from './socket/socket.js'

const __dirname = path.resolve()

dotenv.config()

app.use(cookieParser());
app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true // разрешить отправку куки
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


connect().then(() => {
	const port = process.env.PORT || 8080;
	try {
		server.listen(port, () => console.log(`Server started on port ${port}`))
	} catch (err) {
		console.log(err)
	}
})

