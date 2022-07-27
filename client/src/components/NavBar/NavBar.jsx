import style from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useCallback, useEffect } from "react";

function NavBar({ logOutAction }) {
	const [cookies, removeCookie] = useCookies(["token"]);
	const navigate = useNavigate();

	const handleLogOut = useCallback(() => {
		removeCookie("token");
		logOutAction();
	}, [logOutAction, removeCookie]);

	const logOut = (event) => {
		event.preventDefault();
		if (window.confirm("Are you sure you want to log out?")) {
			handleLogOut();
			navigate("/login");
		}
	};

	useEffect(() => {
		if (!cookies.token) {
			handleLogOut();
		}
	}, [cookies.token, handleLogOut]);

	return (
		<div className={style.navBar}>
			<Link to="/schedule" className={style.button}>
				Schedule
			</Link>
			<Link to="/messenger" className={style.button}>
				Messenger
			</Link>
			<Link to="/profile" className={style.button}>
				Profile
			</Link>
			<Link to="/settings" className={style.button}>
				Settings
			</Link>
			<a href="" onClick={(event) => logOut(event)} className={style.button}>
				Log Out
			</a>
		</div>
	);
}

export default NavBar;
