import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const {username, password, confirmPassword, gender} = req.body;
		if (password !== confirmPassword) {
			return res.status(400).json({message: "Passwords do not match"});
		}

		const user = await UserModel.findOne({username})
		if (user) {
			return res.status(400).json({message: "User already exists"});
		}
		// hash password here
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// profile pick with avatar placeholder
		const avatarM = `https://avatar.iran.liara.run/public/boy?username=${username}`
		const avatarW = `https://avatar.iran.liara.run/public/girl?username=${username}`
		const newUser = new UserModel({
			username,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? avatarM : avatarW
		})

		if (newUser) {
			generateTokenAndSetCookie(newUser._id, res)
			await newUser.save();
		}

		res.status(201).json({
			_id: newUser._id,
			username: newUser.username,
			profilePic: newUser.profilePic,
		})
	} catch (e) {
		res.status(500).send({message: e.message})
		console.log(e)
	}
}

export const login = async (req, res) => {
	try {
		const {username, password} = req.body;
		const user = await UserModel.findOne({username})
		if (!user) {
			return res.status(400).json({message: "Wrong credentials"});
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({message: "Wrong credentials"});
		}
		generateTokenAndSetCookie(user._id, res)

		res.status(200).json({
			_id: user._id,
			username: user.username,
			profilePic: user.profilePic,
		})


	} catch (e) {
		res.status(500).send({message: e.message})
		console.log(e)
	}
}

export const logout = async (req, res) => {
	try {
		res.cookie("token", "", {maxAge: 0})
		res.status(200).json({message: "Logged out successfully"})

	} catch (e) {
		res.status(500).send({message: e.message})
		console.log(e)
	}
}