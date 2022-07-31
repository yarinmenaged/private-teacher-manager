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
            <Flex align={Flex.align.END} justify={Flex.justify.CENTER}>
                <Dropdown
                    options={allOptions}
                    value={{ value: "Select Teacher", label: "Select Teacher" }}
                    onChange={(event) => chooseTeacher(event)}
                    clearable={false}
                    className={cx("dropdown-stories-styles_big-spacing", style.width)} />
                {
                    mySchedule &&
                    <Button
                        onClick={(event) => chooseTeacherAction(event)}
                        size={Button.sizes.MEDIUM}
                        rightIcon={Calendar}
                        className={style.button}>
                        My Schedule
                    </Button>
                }
            </Flex>
        </div >
    );
}

export default SearchTeacher;
