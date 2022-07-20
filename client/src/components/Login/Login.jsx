import style from './Login.module.css'
import cx from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home');
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <input type="text" pattern="^\S{6,}" title="minimum length of 6 characters without spaces"
          placeholder='Username...' className={style.input} required />

        <input type="password" placeholder='Password...' className={style.input} required />

        <input type="submit" value="Continue" className={cx(style.submit, style.input)} />

        <p>If you do not have an account?
          <Link to="/register" className={style.span}>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
