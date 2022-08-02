import { Link } from "react-router-dom";
import SettingsContainerConnector from "./settingsContainer/settingsContainerConnector";
import NavBar from "../NavBar/NavBarConnector";

function Settings() {
  return (
    <div>
      <NavBar />
      <p>settings</p>
      <SettingsContainerConnector />
      <Link to="/home">back</Link>
    </div>
  );
}

export default Settings;
