import React from 'react';
import useConversation from "../storeZustand/useConversation";
import {useSocketContext} from "../context/SocketContext";

const Conversation = ({conversation}) => {
	const {selectedConversation, setSelectedConversation} = useConversation()
	const {onlineUsers} = useSocketContext()
	const isOnlineStatus = onlineUsers.includes(conversation._id)

	const isSelected = selectedConversation?._id === conversation._id
	return (
			<>
				<div
						className={`${isSelected ? 'bg-gray-800' : ''} flex gap-2 items-center hover:bg-gray-700 rounded p-2 py-1 cursor-pointer`}
						onClick={() => setSelectedConversation(conversation)}>
					<div className={`avatar ${isOnlineStatus ? 'online' : ''}`}>
						<div className="w-8 rounded-full">
							<img src={conversation.profilePic} alt={"avatar"}/>
						</div>
					</div>
					<div className='flex flex-col flex-1 '>
						<div className='flex gap-2'>
							<p className='font-bold'>{conversation.username}</p>
							<span className='text-lg'>😃</span>
						</div>
					</div>
				</div>
				<div className='divider px-0 py-0 mx-0 my-0'></div>
			</>
	);
};

export default Conversation;