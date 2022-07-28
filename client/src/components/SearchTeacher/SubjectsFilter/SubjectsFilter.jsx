import { useEffect } from 'react';
import { useCallback } from 'react';
import style from './SubjectsFilter.module.css';

function SubjectsFilter({
    selectSubjectAction,
    deselectSubjectAction,
    selectedSubjects,
    unchooseTeacherAction,
    onlyOneOptionAction,
    subjectsList,
}) {
    return (
        <div>
            {
                window.location.href.includes("search-profile")
                    ? <MultipleSubjectsOptions
                        selectSubjectAction={selectSubjectAction}
                        unchooseTeacherAction={unchooseTeacherAction}
                        deselectSubjectAction={deselectSubjectAction}
                        selectedSubjects={selectedSubjects}
                        subjectsList={subjectsList} />
                    : <OneSubjectOption
                        onlyOneOptionAction={onlyOneOptionAction}
                        selectSubjectAction={selectSubjectAction}
                        subjectsList={subjectsList} />
            }
        </div>
    );
}

function MultipleSubjectsOptions({
    selectSubjectAction,
    deselectSubjectAction,
    selectedSubjects,
    unchooseTeacherAction,
    subjectsList
}) {

    const selectSubject = useCallback((event) => {
        unchooseTeacherAction();
        if (event.target.checked) {
            selectSubjectAction(event.target.name);
        } else {
            deselectSubjectAction(event.target.name);
        }

    }, [selectSubjectAction, unchooseTeacherAction, deselectSubjectAction]);

    return (
        <div className={style.flex}>
            {
                subjectsList.map((subject, index) => {
                    return (
                        <div key={index} className={style.flex}>
                            <p>{subject}</p>
                            <input type="checkbox" onChange={(event) => selectSubject(event)}
                                name={subject} className={style.checkbox}
                                defaultChecked=
                                {
                                    selectedSubjects.includes(subject)
                                        ? true
                                        : false
                                } />
                        </div>
                    );
                })
            }
        </div>
    );
}

function OneSubjectOption({ onlyOneOptionAction, selectSubjectAction, subjectsList }) {

    useEffect(() => {
        onlyOneOptionAction();
    }, []);

    const selectSubject = useCallback((event) => {
        onlyOneOptionAction();
        selectSubjectAction(event.target.value);
    }, [selectSubjectAction]);

    return (
        <select defaultValue="deafult" type="select" onChange={(event) => selectSubject(event)}>
            <option value="deafult" disabled>select subject</option>
            {
                subjectsList.map((subject, index) => {
                    return <option key={index}> {subject}</option>
                })
            }
        </select>
    );
}

export default SubjectsFilter