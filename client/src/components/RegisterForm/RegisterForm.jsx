import style from './RegisterForm.module.css';
import cx from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {

    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate('/login');
    }

    return (
        <div className={style.formContainer}>
            <form className={style.form} onSubmit={() => {
                alert("Registration Confirmed");
                handleSubmit();
            }}>
                <h3>Registration</h3>

                <label>Name:</label><br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "47%" }}>
                        <input type="name" className={style.input} required /><br />
                        <label style={{ color: "grey" }}>First Name</label>
                    </div>
                    <div style={{ width: "47%" }}>
                        <input type="name" className={style.input} required /><br />
                        <label style={{ color: "grey" }}>Last Name</label>
                    </div>
                </div>
                <br />

                <label style={{ marginRight: "14px" }}>Are You:</label>
                <select type="select" defaultValue="Select" required>
                    <option value="Select" disabled>Select</option>
                    <option value="teacher">teacher</option>
                    <option value="student">student</option>
                </select><br />

                <label>Email:</label><br />
                <input type="email" className={style.input} required /><br />
               
                <label>Password:</label><br />
                <input type="password" className={style.input} pattern=".{8,}" title="minimum length of 8 characters" required /><br />

                <label>Mobile Number:</label><br />
                <input type="tel" className={style.input} required /><br />

                <input type="submit" value="Continue" className={cx(style.submit, style.input)} />
                <Link to="/login" className={style.back}>Back</Link>
            </form>
        </div>
    );
}

export default RegisterForm;