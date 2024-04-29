import React from 'react';
import Message from '../components/Message';
import useConversation from "../storeZustand/useConversation";
import {useRef, useEffect} from "react";


const Messages = () => {
	const {messages} = useConversation()

	const chatContainerRef = useRef(null);

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.style.overflowY = 'hidden'
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
			setTimeout(() => {
				// chatContainerRef.current.scrollIntoView({behavior: 'smooth'})
				chatContainerRef.current.style.overflowY = 'auto';
			}, 400);
		}
	}, [messages]);

	return (
			<div className='px-4 flex-1 overflow-auto' ref={chatContainerRef}>
				{messages.map((message, i) => (
						<Message
								message={message}
								key={message?._id || new Date().toISOString() + Math.random()}
								previousMessage={i > 0 ? messages[i - 1] : null}
						/>
				))}
			</div>
	);
};

export default Messages;