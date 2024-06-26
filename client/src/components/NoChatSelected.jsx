import React from 'react';
import {useAuthContext} from "../context/AuthContext";

const NoChatSelected = () => {
	const {user} = useAuthContext()

	return (
			<div className='flex items-center justify-center w-full h-full'>
				<div
						className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
					<p>Welcome {user.username}!</p>
					<p>Select a chat to start messaging</p>
				</div>
			</div>
	);
};

export default NoChatSelected;