import React from 'react';

const Conversation = () => {
	return (
			<>
				<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
					<div className="avatar online">
						<div className="w-14 rounded-full">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
						</div>
					</div>
					<div className='flex flex-col flex-1 '>
						<div className='flex gap-2'>
							<p className='font-bold'>John Doe</p>
							<span className='text-lg'>😃</span>
						</div>
					</div>
				</div>
				<div className='divider px-0 py-0 mx-0 my-0'></div>
			</>
	);
};

export default Conversation;