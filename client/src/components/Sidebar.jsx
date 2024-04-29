import React, {useState, useEffect} from 'react';
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";

const Sidebar = () => {
	const navigate = useNavigate();
	const {user} = useAuthContext();
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const {setUser} = useAuthContext();

	// Состояние для хранения исходного списка пользователей
	const [originalUsers, setOriginalUsers] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			setLoading(true)
			try {
				const {data} = await axios.get('/api/users')
				setUsers(data);
				setOriginalUsers(data); // Сохраняем исходный список
			} catch (e) {
				console.log(e)
			} finally {
				setLoading(false)
			}
		}

		fetchUsers();
	}, []);

	const logout = async () => {
		try {
			const {data} = await axios.post("/api/auth//logout");
			if (data.message === 'Logged out successfully') {
				localStorage.removeItem('user');
				setUser(null)
				navigate('/login')
			}
		} catch (e) {
			console.log(e)
		}
	}

	return (
			<div className='border-r border-gray-200 relative p-2 bg-gray-600'>
				<SearchInput
						users={users}
						setUsers={setUsers}
						filteredUsers={filteredUsers}
						setFilteredUsers={setFilteredUsers}
						originalUsers={originalUsers} // Передаем исходный список пользователей
				/>

				<div className='overflow-hidden overflow-y-scroll h-full'>
					<Conversations loading={loading} users={filteredUsers.length > 0 ? filteredUsers : users}/>
				</div>

				<div className='absolute bottom-0 left-0 right-0 bg-gray-800 p-4 z-50 flex items-center justify-center'>
					{user && (
							<div className='flex items-center gap-2'>
								<img className='w-6 h-6' src={user.profilePic}/>
								<p>{user.username}</p>
								<p className='text-gray-300'>online</p>
							</div>
					)}
					<button onClick={logout} className='block ml-auto'>
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
