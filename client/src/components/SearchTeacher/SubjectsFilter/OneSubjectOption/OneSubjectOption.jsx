import { useEffect, useCallback } from 'react';
import style from '../SubjectsFilter.module.css';
import { Dropdown } from 'monday-ui-react-core';

function OneSubjectOption({ resetSubjectsAction, selectSubjectAction, subjectsList }) {

    useEffect(() => {
        resetSubjectsAction();
    }, []);

    const allOptions = subjectsList.map(subject => ({
        value: subject.Name,
        label: subject.Name,
        id: subject.id,
    }));

    const selectSubject = useCallback((event) => {
        resetSubjectsAction();
        selectSubjectAction({ id: event.id, value: event.value });
    }, [selectSubjectAction]);

    return (
        <Dropdown
            options={allOptions}
            onChange={(event) => selectSubject(event)}
            clearable={false}
            placeholder="Select Subject"
            className="dropdown-stories-styles_big-spacing" />
    );
}

export default OneSubjectOption