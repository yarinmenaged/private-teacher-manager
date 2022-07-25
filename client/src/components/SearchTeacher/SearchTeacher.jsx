import style from "./SearchTeacher.module.css";
import map from "lodash/map";
import { useEffect } from 'react'

function SearchTeacher({ allTeachers, chosenTeacher, fetchTeachersAction }) {

    useEffect(() => {
        if (JSON.stringify(allTeachers) === '{}') {
            fetchTeachersAction();
        }
    }, []);

    const chooseTeacher = () => {

    }

    return (
        <div>
            <select type="select" defaultValue="search-teacher" required>
                {map(allTeachers, teacher =>
                    <option onChange={chooseTeacher} key={teacher.id}>{teacher.Name}</option>)}
            </select>
        </div>
    );
}

export default SearchTeacher;