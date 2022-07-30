import { useCallback } from 'react';
import style from '../SubjectsFilter.module.css';

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

export default MultipleSubjectsOptions