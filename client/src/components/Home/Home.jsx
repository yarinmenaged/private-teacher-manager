import style from './Home.module.css';
import NavBar from '../NavBar/NavBar';


function Home ({name}) {
    return (
        <div>
            <NavBar />
            <h1 className={style.screenContainer}>Welcome {name}</h1>
        </div>
    );
}

export default Home