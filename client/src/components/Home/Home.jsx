import style from './Home.module.css';
import NavBar from '../NavBar/NavBarConnector';
import { useEffect } from 'react';
import EventConstants from '../Schedule/CalendarContainer/Event/Constants';


function Home ({Name, getAllSubjectsAction, user_type, GetSettingsAction}) {

    useEffect(() => {
        getAllSubjectsAction();
        if(user_type === EventConstants.USER_TYPE.Teacher)
            GetSettingsAction();
    }, [user_type, GetSettingsAction, getAllSubjectsAction]);

    return (
        <div>
            <NavBar />
            <h1 className={style.screenContainer}>Welcome {Name}</h1>
        </div>
    );
}

export default Home