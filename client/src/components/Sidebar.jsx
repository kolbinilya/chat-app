import React from 'react';
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const Sidebar = () => {
	return (
			<div className='border-r border-gray-200 relative p-2'>
				<SearchInput/>

				<div className='overflow-hidden overflow-y-scroll h-full'>
					<Conversations/>
				</div>

				<div className='absolute bottom-0 left-0 right-0 bg-gray-400 px-2 z-50'>
					<button className='mt-2'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
								 stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round"
										d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
						</svg>
					</button>
				</div>
				
			</div>
	);
};

export default Sidebar;