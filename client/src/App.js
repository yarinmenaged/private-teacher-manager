import "./App.css";
import Login from "./components/Login/LoginConnector";
import RegisterForm from "./components/RegisterForm/RegisterFormConnector";
import Home from "./components/Home/HomeConnector";
import Schedule from "./components/Schedule/ScheduleConnector";
import Messenger from "./components/Messenger/MessengerConnector";
import Profile from "./components/Profile/ProfileConnector";
import Landing from "./components/Landing/Landing";
import Settings from "./components/Settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App({ loginStatus }) {
	return (
		<Router>
			<div className="App-header">
				<div className="container">
					<h2 style={{ textAlign: "center" }}>
						the application logo will be here
					</h2>
					<Routes>
						<Route path="/" exact element={<Landing />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<RegisterForm />} />
						<Route path="/home" element={<Home />} />
						<Route path="/schedule" element={<Schedule />} />
						<Route path="/messenger" element={<Messenger />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
