import style from "./SearchTeacher.module.css";
import map from "lodash/map";
import { useEffect } from 'react'
import { useCallback } from "react";

function SearchTeacher({
    allTeachers,
    choosenTeacherIndex,
    fetchTeachersAction,
    chooseTeacherAction
}) {
    
    const DEFAULT = "default";

    useEffect(() => {
        if (JSON.stringify(allTeachers) === '{}') {
            fetchTeachersAction();
        }
    }, []);


    const chooseTeacher = useCallback((event) => {
        chooseTeacherAction(event.target.value)
    }, [chooseTeacherAction]);

    let index = -1;
    return (
        <div>
            <select type="select" onChange={(event) => chooseTeacher(event)}
                defaultValue={
                    choosenTeacherIndex
                        ? choosenTeacherIndex
                        : DEFAULT
                    } required>
                <option value={DEFAULT} disabled>select teacher</option>
                {
                    map(allTeachers, teacher => {
                        index++;
                        return <option value={index} key={teacher.id}>{teacher.Name}</option>
                    })
                }
            </select>
        </div>
    );
}

export default SearchTeacher;