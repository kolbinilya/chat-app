import React from 'react';
import Messages from './Messages';
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
	const noChatSelected = false;
	return (
			<div className='md:min-w-[450px] flex flex-col '>
				{noChatSelected ? (
						<NoChatSelected/>
				) : (
						<>
							<header className='bg-gray-400 px-4 py-2 mb-2'>
								<span className='text-gray-900'>To: </span><span className='text-gray-900 font-bold'>John Doe</span>
							</header>
							<Messages/>
							<MessageInput/>
						</>
				)}
			</div>
	);
};

export default MessageContainer;

