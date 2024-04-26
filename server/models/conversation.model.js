import mongoose, {Schema} from "mongoose";


const ConversationSchema = new Schema({
	participants: [
		{
			type: Schema.Types.ObjectId,
			ref: "User"
		},
	],
	messages: [
		{
			type: Schema.Types.ObjectId,
			ref: "Message",
			default: []
		}
	]
}, {timestamps: true});

export default mongoose.model("Conversation", ConversationSchema);