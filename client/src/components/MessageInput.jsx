import React, {useEffect, useState} from 'react';
import useConversation from "../storeZustand/useConversation";
import axios from "axios";

const MessageInput = () => {
	const [message, setMessage] = useState('')
	const {messages, setMessages, selectedConversation} = useConversation()

	const sendMessage = async (e) => {
		try {
			e.preventDefault();
			const {data} = await axios.post(`/api/messages/send/${selectedConversation._id}`, {message})
			setMessages([...messages, data])
			setMessage('')
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {

		const getMessages = async () => {
			try {
				const {data} = await axios.get(`/api/messages/${selectedConversation._id}`)
				setMessages(data)
			} catch (err) {
				console.log(err)
			}
		}

		getMessages()
	}, [selectedConversation._id]);

	return (
			<form
					className='px-4 my-3 '
					onSubmit={sendMessage}
			>
				<div className='flex gap-1 w-full items-center'>
					<input type="text"
								 className='border text-sm rounded-lx block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
								 placeholder='Send a message..'
								 value={message}
								 onChange={(e) => setMessage(e.target.value)}
					/>
					<button
							className='flex items-center justify-center gap-1 border rounded-md px-4 py-2 bg-green-500'
							type='submit'
					>
						<span>Send</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
								 stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round"
										d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
						</svg>
					</button>
				</div>
			</form>
	);
};

export default MessageInput;