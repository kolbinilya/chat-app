import Login from './pages/login/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";

const App = () => {
	return (
			<div className='p-4 h-screen flex items-center justify-center text-white'>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/login" element={<Login/>}/>
						<Route path="/signup" element={<Signup/>}/>
					</Routes>
				</BrowserRouter>
			</div>
	);
}

export default App;
