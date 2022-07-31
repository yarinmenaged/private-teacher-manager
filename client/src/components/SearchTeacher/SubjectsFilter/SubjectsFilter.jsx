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
            selectSubjectAction({ Name: event.target.name, id: event.target.id });
        } else {
            deselectSubjectAction(event.target.name);
        }

    }, [selectSubjectAction, unchooseTeacherAction, deselectSubjectAction]);

    return (
        <div className={style.flex}>
            {
                subjectsList.map(subject => {
                    return (
                        <div key={subject.id} className={style.flex}>
                            <p>{subject.Name}</p>
                            <input type="checkbox" onChange={(event) => selectSubject(event)}
                                name={subject.Name} id={subject.id} className={style.checkbox}
                                defaultChecked=
                                {
                                    selectedSubjects.includes(subject.Name)
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

export default SubjectsFilter