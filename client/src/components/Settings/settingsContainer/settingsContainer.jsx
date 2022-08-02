//import style from "./Settings.module.css";
import WorkingHoursConnector from "./WorkingHours/WorkingHoursConnector";
import style from "../Settings.module.css";

function SettingsContainer({ type }) {
  return (
    <div className={style.container}>
      {type === "Teacher" ? (
        <div>
          <WorkingHoursConnector />
        </div>
      ) : (
        <h2>
          “Education is the passport to the future, for tomorrow, belongs to
          those who prepare for it today.” – Malcolm X
        </h2>
      )}
    </div>
  );
}

export default SettingsContainer;
