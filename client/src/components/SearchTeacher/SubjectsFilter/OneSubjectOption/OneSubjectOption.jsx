import { useEffect, useCallback } from 'react';
import style from '../SubjectsFilter.module.css';

function OneSubjectOption({ onlyOneOptionAction, selectSubjectAction, subjectsList }) {

    useEffect(() => {
        onlyOneOptionAction();
    }, []);

    const selectSubject = useCallback((event) => {
        onlyOneOptionAction();
        const subject = subjectsList.find(subject => subject.Name === event.target.value)
        selectSubjectAction(subject);
    }, [selectSubjectAction]);

    return (
        <select defaultValue="deafult" type="select" onChange={(event) => selectSubject(event)}>
            <option value="deafult" disabled>select subject</option>
            {
                subjectsList.map(subject => {
                    return <option name={subject.id} key={subject.id}>{subject.Name}</option>
                })
            }
        </select>
    );
}

export default OneSubjectOption