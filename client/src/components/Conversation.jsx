import React from 'react';
import useConversation from "../storeZustand/useConversation";

const Conversation = ({conversation}) => {
	const {selectedConversation, setSelectedConversation} = useConversation()

	const isSelected = selectedConversation?._id === conversation._id
	return (
			<>
				<div
						className={`${isSelected ? 'bg-sky-500' : ''} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
						onClick={() => setSelectedConversation(conversation)}>
					<div className="avatar online">
						<div className="w-14 rounded-full">
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