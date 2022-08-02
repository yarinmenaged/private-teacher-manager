import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/LoginConnector";
import RegisterForm from "./components/RegisterForm/RegisterFormConnector";
import Home from "./components/Home/HomeConnector";
import Schedule from "./components/Schedule/ScheduleConnector";
import Messenger from "./components/Messenger/MessengerConnector";
import MyProfile from "./components/Profile/MyProfile/MyProfileConnector";
import SearchProfile from "./components/Profile/SearchProfile/SearchProfileConnector";
import Landing from "./components/Landing/Landing";
import Settings from "./components/Settings/Settings";
import { useCookies, CookiesProvider } from "react-cookie";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useEffect } from "react";

function App({ loginStatus, getUserInfoByTokenAction }) {
	const [cookies, removeCookie] = useCookies(["token"]);

	useEffect(() => {
		getUserInfoByTokenAction();
	}, [loginStatus, getUserInfoByTokenAction, cookies]);

	return (
		<div className="App-header">
			<div className="container">
				<div style={{ backgroundColor: "rgb(78, 99, 165)" }}>
					{/* <img src={logo} alt="Private teacher manager" className="logo" /> */}
				</div>
				<Router>
					{!loginStatus && <NavBar />}
					{!loginStatus ? (
						<Routes>
							<Route path="/" exact element={<Landing />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<RegisterForm />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
					) : (
						<CookiesProvider>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/home" element={<Home />} />
								<Route path="/schedule" element={<Schedule />} />
								<Route path="/messenger" element={<Messenger />} />
								<Route path="/my-profile" element={<MyProfile />} />
								<Route path="/search-profile" element={<SearchProfile />} />
								<Route path="/settings" element={<Settings />} />
								<Route path="*" element={<Navigate to="/home" />} />
							</Routes>
						</CookiesProvider>
					)}
				</Router>
			</div>
		</div>
	);
}

export default App;
