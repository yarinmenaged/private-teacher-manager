import { useEffect } from 'react';
import { useCallback } from 'react';
import style from './SubjectsFilter.module.css';
import SUBJECTS_LIST from './subjectsConstant';

function SubjectsFilter({
    selectSubjectAction,
    deselectSubjectAction,
    selectedSubjects,
    unchooseTeacherAction,
    onlyOneOptionAction
}) {
    return (
        window.location.href.includes("search-profile")
            ? <MultipleSubjectsOptions
                selectSubjectAction={selectSubjectAction}
                unchooseTeacherAction={unchooseTeacherAction}
                deselectSubjectAction={deselectSubjectAction}
                selectedSubjects={selectedSubjects} />
            : <OneSubjectOption
                onlyOneOptionAction={onlyOneOptionAction}
                selectSubjectAction={selectSubjectAction} />
    );
}

function MultipleSubjectsOptions({
    selectSubjectAction,
    deselectSubjectAction,
    selectedSubjects,
    unchooseTeacherAction,
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
                SUBJECTS_LIST.map((subject, index) => {
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

function OneSubjectOption({ onlyOneOptionAction, selectSubjectAction }) {

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
                SUBJECTS_LIST.map(subject => {
                    return <option key={subject}> {subject}</option>
                })
            }
        </select>
    );
}

export default SubjectsFilter