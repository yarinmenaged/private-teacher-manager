import { useCallback } from 'react';
import style from '../SubjectsFilter.module.css';
import { Dropdown } from 'monday-ui-react-core';
import { Flex } from 'monday-ui-react-core';
import cx from 'classnames'

function MultipleSubjectsOptions({
    selectSubjectAction,
    deselectSubjectAction,
    selectedSubjects,
    unchooseTeacherAction,
    subjectsList,
    resetSubjectsAction,
}) {

    const allOptions = subjectsList.map(subject => ({
        value: subject.Name,
        label: subject.Name,
        id: subject.id,
    }));

    const selectedOptions = selectedSubjects.map(subject => ({
        value: subject.Name,
        label: subject.Name,
        id: subject.id,
    }));

    const selectSubject = useCallback((event) => {
        unchooseTeacherAction();
        if (!event) resetSubjectsAction();
        else selectSubjectAction(event[event.length - 1]);
    }, [selectSubjectAction, unchooseTeacherAction]);

    const removeSubject = useCallback((event) => {
        unchooseTeacherAction();
        deselectSubjectAction(event.value);
    }, [deselectSubjectAction, unchooseTeacherAction]);

    return (
        <Flex justify={Flex.justify.CENTER}>
            <Dropdown
                multiline multi
                options={allOptions}
                defaultValue={selectedOptions}
                onChange={(event) => selectSubject(event)}
                onOptionRemove={(event) => removeSubject(event)}
                placeholder="Select Subjects"
                className={cx("dropdown-stories-styles_with-chips", style.width)} />
        </Flex>
    );
}

export default MultipleSubjectsOptions