import style from './Home.module.css';
import NavBar from '../NavBar/NavBar';


function Home () {
    return (
        <div>
            <NavBar />
            <h1 className={style.screenContainer}>Welcome yarinmenaged</h1>
        </div>
    );
}

export default Home