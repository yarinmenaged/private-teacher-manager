import map from "lodash/map";
import SubjectsFilter from "./SubjectsFilter/SubjectsFilterConnector";
import { useEffect } from 'react'
import { useCallback } from "react";
import { Dropdown, Button, Flex } from 'monday-ui-react-core';
import Calendar from "monday-ui-react-core/dist/icons/Calendar";
import style from './SearchTeacher.module.css';
import cx from 'classnames'

function SearchTeacher({
    areTeachersFetched,
    fetchTeachersAction,
    chooseTeacherAction,
    selectedTeachers,
    mySchedule,
    multipleOptions,
    UnsetCalendarToUserAction,
    UnsetTeacherSettingsAction
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
        chooseTeacherAction(event.id);
    }, [chooseTeacherAction]);

    const my_schedule_click = useCallback(() => {
        UnsetCalendarToUserAction();
        chooseTeacherAction("");
        UnsetTeacherSettingsAction();
    }, [UnsetCalendarToUserAction, chooseTeacherAction, UnsetTeacherSettingsAction]);

    return (        
        <div className={style.container}>
            <SubjectsFilter multipleOptions={multipleOptions} />
                <Dropdown
                    options={allOptions}
                    value={{ value: "Select Teacher", label: "Select Teacher" }}
                    placeholder={"Select teacher"}
                    onChange={(event) => chooseTeacher(event)}
                    clearable={false}
                    className={cx("dropdown-stories-styles_big-spacing", style.width)} />
                {
                    mySchedule &&
                    <Button
                        onClick={my_schedule_click}
                        size={Button.sizes.MEDIUM}
                        rightIcon={Calendar}
                        className={style.button}>
                        My Schedule
                    </Button>
                }
        </div>
    );
}

export default SearchTeacher;
