import style from "./Login.module.css";
import cx from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { Icon } from 'monday-ui-react-core';
import { Close } from "monday-ui-react-core/dist/allIcons";

function Login({ getUserInfoAction, loginStatus, incorrectPassword }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus) navigate("/home");
  }, [loginStatus, navigate]);

	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		const email = event.target.elements.email.value;
		const password = event.target.elements.password.value;
		getUserInfoAction(email, password);
	},
		[getUserInfoAction]
	);

  return (
    <div className={style.inLine}>
      <form
        className={style.form}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <h3>Log In</h3>

        <input
          type="email"
          name="email"
          placeholder="Email..."
          className={style.input}
          required
        />

				<input
					type="password"
					name="password"
					placeholder="Password..."
					className={style.input}
					required
				/>
				{
					incorrectPassword &&
					< div className={style.incorrect}>
						<Icon icon={Close} /> Incorrect email or password 
					</div>
				}

        <input
          type="submit"
          value="Continue"
          className={cx(style.submit, style.input)}
        />

        <p>
          If you do not have an account?
          <Link to="/register" className={style.span}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
