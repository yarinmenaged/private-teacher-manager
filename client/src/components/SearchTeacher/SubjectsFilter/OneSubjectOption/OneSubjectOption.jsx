import { useEffect, useCallback, useState } from 'react';
import style from '../SubjectsFilter.module.css';
import { Dropdown } from 'monday-ui-react-core';
import cx from 'classnames';

function OneSubjectOption({ resetSubjectsAction, selectSubjectAction, subjectsList, selctedSubjects }) {

    const allOptions = subjectsList.map(subject => ({
        value: subject.Name,
        label: subject.Name,
        id: subject.id,
    }));

    useEffect(() => {
        if (selctedSubjects.length > 1) {
            resetSubjectsAction();
            selectSubjectAction({ id: selctedSubjects[0].id, value: selctedSubjects[0].Name });
        }
    }, []);

    const selectSubject = useCallback((event) => {
        resetSubjectsAction();
        selectSubjectAction({ id: event.id, value: event.value });
    }, [selectSubjectAction, resetSubjectsAction]);

    return (
            <Dropdown
                options={allOptions}
                //defaultValue={defaultValue}
                onChange={(event) => selectSubject(event)}
                clearable={false}
                placeholder="Select Subject"
                className={cx("dropdown-stories-styles_big-spacing", style.width)} />
    );
}

export default OneSubjectOption