import React, {useEffect} from 'react';
import Messages from './Messages';
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../storeZustand/useConversation";

const MessageContainer = () => {
	const {selectedConversation, setSelectedConversation} = useConversation()

	return (
			<div className='md:min-w-[450px] flex flex-col '>
				{!selectedConversation ? (
						<NoChatSelected/>
				) : (
						<>
							<header className='flex item-center justify-between bg-gray-400 px-4 py-2 mb-2'>
								<div>
									<span className='text-gray-900'>To: </span><span
										className='text-gray-900 font-bold'>{selectedConversation.username}</span>
								</div>

								<button onClick={() => setSelectedConversation(null)} className="btn rounded-full">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
											 stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
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

