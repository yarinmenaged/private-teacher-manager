import style from "./SearchTeacher.module.css";
import map from "lodash/map";
import SubjectsFilter from "./SubjectsFilter/SubjectsFilterConnector";
import { useEffect } from 'react'
import { useCallback } from "react";

function SearchTeacher({
    areTeachersFetched,
    fetchTeachersAction,
    chooseTeacherAction,
    chosenTeacher,
    selectedTeachers,
}) {

    const DEFAULT = "default";

    useEffect(() => {
        if (!areTeachersFetched) {
            fetchTeachersAction();
        }
    }, []);

    const chooseTeacher = useCallback((event) => {
        chooseTeacherAction(event.target.value)
    }, [chooseTeacherAction]);

    return (
        <div>
            <SubjectsFilter />
            <select type="select" onChange={(event) => chooseTeacher(event)}
                defaultValue={
                    chosenTeacher
                        ? chosenTeacher
                        : DEFAULT
                }>
                <option value={DEFAULT} disabled>select teacher</option>
                {
                    map(selectedTeachers, teacher => {
                        return <option value={teacher.id} key={teacher.id}>{teacher.Name}</option>
                    })
                }
            </select>
        </div>
    );
}

export default SearchTeacher;