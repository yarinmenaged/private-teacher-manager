//import style from "./Settings.module.css";
import WorkingHoursConnector from "./WorkingHours/WorkingHoursConnector";
import style from "../Settings.module.css";

function SettingsContainer({ type }) {
  return (
    <div className={style.container}>
        <WorkingHoursConnector />
    </div>
  );
}

export default SettingsContainer;
