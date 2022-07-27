import style from "./SearchTeacher.module.css";
import map from "lodash/map";
import SubjectsFilter from "./SubjectsFilter/SubjectsFilterConnector";
import { useEffect } from 'react'
import { useCallback } from "react";

function SearchTeacher({
    choosenTeacherIndex,
    fetchTeachersAction,
    chooseTeacherAction,
    selectedTeachers,
}) {

    const DEFAULT = "default";

    useEffect(() => {
        //if (JSON.stringify(allTeachers) === '{}') {
            fetchTeachersAction();
            
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
                }>
                <option value={DEFAULT} disabled>select teacher</option>
                {
                    map(selectedTeachers, teacher => {
                        index++;
                        return <option value={index} key={teacher.id}>{teacher.Name}</option>
                    })
                }
            </select>
            <SubjectsFilter />
        </div>
    );
}

export default SearchTeacher;