import style from "./Settings.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SettingsContainerConnector from "./settingsContainer/settingsContainerConnector";

function Settings() {
  return (
    <div className={style.container}>
      <NavBar />
      <h1>settings</h1>
      <SettingsContainerConnector />
      <Link to="/home">back</Link>
    </div>
  );
}

export default Settings;
