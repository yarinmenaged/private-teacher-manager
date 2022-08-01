import style from './NavBar.module.css';
import logo from '../../images/logo.jpg';
import { useCookies } from "react-cookie";
import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import USER_TYPE from './Constants';
import { Flex } from 'monday-ui-react-core';

function NavBar({ Type, logOutAction, UnsetCalendarToUserAction, loginStatus }) {

	const [cookies, removeCookie] = useCookies(["token"]);
	const navigate = useNavigate();

	const logOut = useCallback((event) => {
		event.preventDefault();
		if (window.confirm("Are you sure you want to log out?")) {
			removeCookie("token");
			logOutAction();
			navigate('/login');
		}
	}, [logOutAction, removeCookie, navigate]);

	const schedule_unset_callback = useCallback(() => {
		UnsetCalendarToUserAction();
		navigate('/schedule');
	}, [UnsetCalendarToUserAction, navigate]);

	useEffect(() => {
		if (!cookies.token) {
			logOut();
		}
	}, [cookies.token, logOut]);

	return (
		<div className={style.navBar}>
			<Flex>
				<div style={{ backgroundColor: "rgb(78, 99, 165)" }}>
					<img src={logo} alt="Private teacher manager" className={style.logo} />
				</div>
				{
					loginStatus &&
					<Flex className={style.width}>
						<a onClick={() => schedule_unset_callback()} className={style.button}>Schedule</a>
						<Link to="/messenger" className={style.button}>Messenger</Link>
						{
							Type === USER_TYPE.Teacher
								// teacher UI
								? <Link to="/my-profile" className={style.button}> My Profile</Link>

								// student UI
								: <Link to="/search-profile" className={style.button}> Search Teacher</Link>
						}
						<Link to="/settings" className={style.button}>Settings</Link>
						<a href='' onClick={(event) => logOut(event)} className={style.button}>Log Out</a>
					</Flex>
				}
			</Flex>
		</div>
	);
}

export default NavBar;