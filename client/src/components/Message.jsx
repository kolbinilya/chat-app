import React from 'react';
import {useAuthContext} from "../context/AuthContext";
import useConversation from "../storeZustand/useConversation";
import {formattedTime} from "../utils/formattedTime";

const Message = ({message, previousMessage}) => {
	const {user} = useAuthContext();
	const {selectedConversation} = useConversation()
	const isFromMe = message.senderId === user._id
	const chatClass = isFromMe ? "chat-end" : "chat-start"
	const chatColor = isFromMe ? "chat-bubble-success" : ""
	const chatAvatar = isFromMe ? user.profilePic : selectedConversation.profilePic

	// solve previous message avatar

	return (
			<div className={`chat ${chatClass}`}>
				<div className="chat-image avatar">
					<div className="w-10 rounded-full">
						<img alt="avatar"
								 src={chatAvatar}/>
					</div>
				</div>
				<div style={{wordWrap: 'break-word'}}
						 className={`chat-bubble max-w-[350px] ${chatColor}`}>{message.message}</div>
				<div className="chat-footer opacity-50">{formattedTime(message.createdAt)}</div>
			</div>
	)
			;
};

export default Message;