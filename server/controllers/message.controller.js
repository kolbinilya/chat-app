import conversationModel from "../models/conversation.model.js";
import MessageModel from "../models/message.model.js";

export const sendMessage = async (req, res) => {
	try {
		const {message} = req.body;
		const {id: receiverId} = req.params
		const senderId = req.user._id

		let conversation = await conversationModel.findOne({
			participants: {$all: [senderId, receiverId]}
		})

		if (!conversation) {
			conversation = await conversationModel.create({
				participants: [senderId, receiverId],
			})
		}
		const newMessage = await MessageModel.create({
			senderId,
			receiverId,
			message
		})

		if (!newMessage) return res.status(400).send({message: "Error to create a message"})

		conversation.messages.push(newMessage._id)
		await Promise.all([conversation.save(), newMessage.save()])

		res.status(200).send(newMessage)
	} catch (err) {
		console.log("Error sending message");
		res.status(400).json({message: err.message});
	}
}

export const getMessages = async (req, res) => {
	try {
		const {id: userToChatId} = req.params
		const senderId = req.user._id

		const conversation = await conversationModel.findOne({participants: {$all: [senderId, userToChatId]}}).populate("messages")

		if (!conversation) return res.status(200).json([])
		const messages = conversation.messages
		res.status(200).send(messages)

	} catch (e) {
		console.log("Error sending message");
		res.status(400).json({message: e.message});
	}
}