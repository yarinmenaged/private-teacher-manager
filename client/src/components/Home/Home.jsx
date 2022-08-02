import style from './Home.module.css';
import NavBar from '../NavBar/NavBarConnector';
import { useEffect } from 'react';


function Home ({Name, getAllSubjectsAction}) {

    useEffect(() => {
        getAllSubjectsAction();
    }, []);

    return (
        <div>
            <NavBar />
            <h1 className={style.screenContainer}>Welcome {Name}</h1>
        </div>
    );
}

export default Home