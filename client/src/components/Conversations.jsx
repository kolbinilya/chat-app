import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
	return (
			<div className="py-2 flex flex-col">
				{Array.from(Array(10)).map((_, i) => <Conversation key={i}/>)}
			</div>
	);
};

export default Conversations;