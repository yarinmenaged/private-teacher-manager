import { Link } from "react-router-dom";
import SettingsContainerConnector from "./settingsContainer/settingsContainerConnector";
import NavBar from "../NavBar/NavBarConnector";

function Settings() {
  return (
    <div>
      <NavBar />
      <SettingsContainerConnector />
    </div>
  );
}

export default Settings;
