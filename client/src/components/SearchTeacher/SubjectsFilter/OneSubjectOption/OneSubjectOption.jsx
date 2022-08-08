import { useEffect, useCallback, useState } from 'react';
import style from '../SubjectsFilter.module.css';
import { Dropdown } from 'monday-ui-react-core';
import cx from 'classnames';

function OneSubjectOption({ resetSubjectsAction, selectSubjectAction, subjectsList, selectedSubjects }) {

    const allOptions = subjectsList.map(subject => ({
        value: subject.Name,
        label: subject.Name,
        id: subject.id,
    }));

    useEffect(() => {
        if (selectedSubjects.length > 1) {
            resetSubjectsAction();
            selectSubjectAction({ id: selectedSubjects[0].id, value: selectedSubjects[0].Name });
        }
    }, []);

    const selectSubject = useCallback((event) => {
        resetSubjectsAction();
        selectSubjectAction({ id: event.id, value: event.value });
    }, [selectSubjectAction, resetSubjectsAction]);

    return (
            <Dropdown
                options={allOptions}
                onChange={(event) => selectSubject(event)}
                value={{value: selectedSubjects[0]?.Name, label: selectedSubjects[0]?.Name}}
                clearable={false}
                className={cx("dropdown-stories-styles_big-spacing", style.width)} />
    );
}

export default OneSubjectOption