import React from 'react';
import Conversation from './Conversation';

const Conversations = ({users, loading}) => {

	return (
			<div className="py-2 flex flex-col">
				{loading ?
						<span className="loading loading-spinner loading-md m-auto"></span>
						: users.map((conversation, i) =>
								<Conversation conversation={conversation} key={conversation._id}/>
						)}
			</div>
	);
};

export default Conversations;