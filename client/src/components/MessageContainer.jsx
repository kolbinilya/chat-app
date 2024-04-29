import React from 'react';
import Messages from './Messages';
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../storeZustand/useConversation";

const MessageContainer = () => {
	const {selectedConversation, setSelectedConversation} = useConversation()

	return (
			<div className='md:min-w-[450px] flex flex-col bg-gray-600'>
				{!selectedConversation ? (
						<NoChatSelected/>
				) : (
						<>
							<header className='flex item-center justify-between bg-gray-800 p-4 mb-2'>
								{selectedConversation && (
										<div className='flex items-center gap-2'>
											<img className='w-6 h-6' src={selectedConversation.profilePic}/>
											<p>{selectedConversation.username}</p>
											<p className='text-gray-300'>online</p>
										</div>
								)}

								<button onClick={() => setSelectedConversation(null)}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
											 stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
									</svg>
								</button>

							</header>
							<Messages/>
							<MessageInput/>
						</>
				)}
			</div>
	);
};

export default MessageContainer;

