import UserModel from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id
		const allUsers = await UserModel.find({_id: {$ne: loggedInUserId}}).select('-password')
		res.status(200).json(allUsers || [])
	} catch (e) {
		res.status(500).send({message: e.message})
	}
}