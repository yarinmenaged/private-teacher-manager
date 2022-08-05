import style from "./Home.module.css";
import NavBar from "../NavBar/NavBarConnector";
import { useEffect } from "react";
import EventConstants from "../Schedule/CalendarContainer/Event/Constants";

function Home({ Name, getAllSubjectsAction, user_type, GetSettingsAction }) {
  useEffect(() => {
    getAllSubjectsAction();
    if (user_type === EventConstants.USER_TYPE.Teacher) GetSettingsAction();
  }, []);

  return (
    <div>
      <NavBar />
      <div className={style.screenContainer}>
        <h1>Welcome {Name}</h1>
        <blockquote className={style.quote}>
          "Education is the passport to the future, for tomorrow belongs to
          those who prepare for it today." - Malcolm X
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
