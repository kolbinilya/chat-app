import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useAuthContext} from "../../context/AuthContext";

const Login = () => {
	const navigate = useNavigate();
	const {setUser} = useAuthContext()
	const [error, setError] = useState(null);
	const [inputs, setInputs] = React.useState({
		username: 'ilya',
		password: '123456'
	})
	const loginHandler = async (e) => {
		try {
			e.preventDefault();
			const {data} = await axios.post('/api/auth/login', inputs)
			localStorage.setItem('user', JSON.stringify(data))
			setUser(data)
			navigate('/')
		} catch (e) {
			setError(e.response.data.message)
		}
	}
	return (
			<div className='flex flex-col items-center justify-center mx-auto max-w-1/3 min-w-96'>
				<div
						className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
					<h1 className='text-3xl font-semibold text-center text-gray-300'>
						Login
						<span className='text-white'> ChatApp</span>
					</h1>
					<form onSubmit={loginHandler}>
						<label className="input input-bordered flex items-center gap-2 my-4">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
									 className="w-4 h-4 opacity-70">
								<path
										d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
							</svg>
							<input type="text" className="grow" placeholder="Username" value={inputs.username}
										 onChange={e => setInputs({
											 ...inputs,
											 username: e.target.value
										 })}/>
						</label>
						<label className="input input-bordered flex items-center gap-2 mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
									 className="w-4 h-4 opacity-70">
								<path fillRule="evenodd"
											d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
											clipRule="evenodd"/>
							</svg>
							<input type="password" className="grow" value={inputs.password}
										 onChange={e => setInputs({...inputs, password: e.target.value})}/>
						</label>
						<Link className="link link-hover block mb-4" to='/signup'>Dont have any account?</Link>
						{error && <p className='text-red-500 my-2'>{error}</p>}
						<button type='submit' className='btn w-full'>Login</button>
					</form>
				</div>
			</div>
	);
};

export default Login;
