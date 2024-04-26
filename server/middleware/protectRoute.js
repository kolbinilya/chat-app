import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.token
		if (!token) return res.status(401).send("Unauthorized. No token provided");

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		if (!decodedToken) return res.status(401).send("Unauthorized. No token provided");

		const user = await UserModel.findById(decodedToken.userId).select('-password');
		if (!user) return res.status(401).send("User not found");

		req.user = user;
		next()

	} catch (e) {
		res.status(401).json({message: "Internal server error"});
	}
}

export default protectRoute;