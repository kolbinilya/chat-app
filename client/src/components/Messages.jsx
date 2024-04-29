import React from 'react';
import Message from '../components/Message';
import useConversation from "../storeZustand/useConversation";
import {useRef, useEffect} from "react";
import {useSocketContext} from "../context/SocketContext";


const Messages = () => {
	const {messages, setMessages} = useConversation()
	const chatContainerRef = useRef(null);
	const {socket} = useSocketContext()

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true
			setMessages([...messages, newMessage])
		})

		return () => socket?.off("newMessage")
	}, [socket, setMessages, messages])


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