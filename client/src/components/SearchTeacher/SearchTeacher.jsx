import map from "lodash/map";
import SubjectsFilter from "./SubjectsFilter/SubjectsFilterConnector";
import { useEffect } from 'react'
import { useCallback } from "react";

function SearchTeacher({
    getAllSubjectsAction,
    areTeachersFetched,
    fetchTeachersAction,
    chooseTeacherAction,
    selectedTeachers,
}) {

    const DEFAULT = "default";

    useEffect(() => {
        if (!areTeachersFetched) {
            fetchTeachersAction();
            getAllSubjectsAction();
        }
    }, []);

    const chooseTeacher = useCallback((event) => {
        chooseTeacherAction(event.target.value);

    }, [chooseTeacherAction]);

    return (
        <div>
            <SubjectsFilter />
            <select type="select" onChange={(event) => chooseTeacher(event)} value={DEFAULT}>
                <option value={DEFAULT} disabled>select teacher</option>
                {
                    !window.location.href.includes("search-profile") &&
                    < option style={{ fontWeight: "bolder" }} value="">my own schedule</option>
                }
            {
                map(selectedTeachers, teacher => {
                    return <option value={teacher.id} key={teacher.id}>{teacher.Name}</option>
                })
            }
        </select>
        </div >
    );
}

export default SearchTeacher;
