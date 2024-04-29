import Login from './pages/login/Login';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import axios from "axios";
import {useAuthContext} from "./context/AuthContext";

// setting
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.withCredentials = true;

const App = () => {
	const {user} = useAuthContext();


	return (
			<div className='p-4 h-screen flex items-center justify-center text-white'>
				<Routes>
					<Route path="/" element={!user ? <Navigate to='/login'/> : <Home/>}/>

					<Route path="/login" element={user ? <Navigate to='/'/> : <Login/>}/>
					<Route path="/signup" element={user ? <Navigate to='/'/> : <Signup/>}/>
				</Routes>
			</div>
	);
}

export default App;
