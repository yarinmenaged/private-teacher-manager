import style from "./RegisterForm.module.css";
import cx from "classnames";
import { Link, useNavigate } from "react-router-dom";
import serverConnection from "../../services/dbServices";
import ApiService from "../../services/ApiService";
import { useCallback, useEffect, useState } from "react";

function RegisterForm() {
  const navigate = useNavigate();

  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = useCallback(
    async () => {
      setCitiesList(await ApiService.getCities());
    }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const firstName = event.target.elements.firstName.value;
      const lastName = event.target.elements.lastName.value;
      const Name = `${firstName} ${lastName}`;
      const userType = event.target.elements.userType.value;
      const Email = event.target.elements.email.value;
      const Location = event.target.elements.location.value;
      const Password = event.target.elements.password.value;
      const Phone = event.target.elements.phone.value;
      await serverConnection.addUser(Name, userType, Email, Password, Location, Phone);
      navigate("/login");
    },
    [navigate]
  );

  return (
    <div className={style.formContainer}>
      <form
        className={style.form}
        onSubmit={(event) => {
          alert("Registration Confirmed");
          handleSubmit(event);
        }}
      >
        <h3>Registration</h3>

        <label>Name:</label>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "47%" }}>
            <input
              name="firstName"
              type="name"
              className={style.input}
              required
            />
            <br />
            <label style={{ color: "grey" }}>First Name</label>
          </div>
          <div style={{ width: "47%" }}>
            <input
              name="lastName"
              type="name"
              className={style.input}
              required
            />
            <br />
            <label style={{ color: "grey" }}>Last Name</label>
          </div>
        </div>
        <br />

        <label style={{ marginRight: "14px" }}>Are You:</label><br />
        <select name="userType" type="select" defaultValue="teacher" required>
          <option value="teacher">teacher</option>
          <option value="student">student</option>
        </select>
        <br />

        <label>Email:</label>
        <br />
        <input name="email" type="email" className={style.input} required />
        <br />

        <label>Password:</label>
        <br />
        <input
          name="password"
          type="password"
          className={style.input}
          pattern=".{8,}"
          title="minimum length of 8 characters"
          required
        />
        <br />

        <label>Location:</label>
        <br />
        <select name="location" type="select" defaultValue="default" required>
          <option value="default" disabled>Select Location</option>
          {
            citiesList &&
            citiesList.map((city, index) => {
              return <option key={index} value={city.name}>{city.name}</option>
            })
          }
        </select><br />

        <label>Mobile Number:</label>
        <br />
        <input name="phone" type="tel" className={style.input} required />
        <br /><br />

        <input
          type="submit"
          value="Continue"
          className={cx(style.submit, style.input)}
        />
        <Link to="/login" className={style.back}>
          Back
        </Link>
      </form>
    </div>
  );
}

export default RegisterForm;
