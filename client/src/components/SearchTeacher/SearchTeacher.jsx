import map from "lodash/map";
import SubjectsFilter from "./SubjectsFilter/SubjectsFilterConnector";
import { useEffect } from 'react'
import { useCallback } from "react";
import { Dropdown } from 'monday-ui-react-core';

function SearchTeacher({
    areTeachersFetched,
    fetchTeachersAction,
    chooseTeacherAction,
    selectedTeachers,
    mySchedule,
    multipleOptions,
}) {

    const allOptions = selectedTeachers.map(teacher => ({
        value: teacher.Name,
        label: teacher.Name,
        id: teacher.id,
    }));

    useEffect(() => {
        if (!areTeachersFetched) {
            fetchTeachersAction();
        }
    }, []);

    const chooseTeacher = useCallback((event) => {
        chooseTeacherAction(event.id)
    }, [chooseTeacherAction]);

    return (
        <div>
            <SubjectsFilter multipleOptions={multipleOptions} />
            <Dropdown
                options={allOptions}
                value={{ value: "Select Teacher", label: "Select Teacher" }}
                onChange={(event) => chooseTeacher(event)}
                clearable={false}
                className="dropdown-stories-styles_big-spacing" />
            {
                mySchedule && <button onClick={(event) => chooseTeacherAction(event)}>My Own Schedule</button>
            }
        </div >
    );
}

export default SearchTeacher;
