import { useEffect, useCallback } from 'react';
import style from '../SubjectsFilter.module.css';
import { Dropdown } from 'monday-ui-react-core';
import cx from 'classnames'
import { Flex } from 'monday-ui-react-core';

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
        <Flex justify={Flex.justify.CENTER}>
            <Dropdown
                options={allOptions}
                onChange={(event) => selectSubject(event)}
                clearable={false}
                placeholder="Select Subject"
                className={cx("dropdown-stories-styles_big-spacing", style.width)} />
        </Flex>
    );
}

export default OneSubjectOption