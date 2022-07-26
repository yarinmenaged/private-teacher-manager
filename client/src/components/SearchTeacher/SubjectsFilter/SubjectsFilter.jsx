import { useCallback } from 'react';
import style from './SubjectsFilter.module.css'

function SubjectsFilter({ selectSubjectAction, deselectSubjectAction }) {

    const subjectsList = ["history", "english", "math", "physics", "chemistry", "biology"];

    const selectSubject = useCallback((event) => {

        if (event.target.checked) {
            selectSubjectAction(event.target.value);
        } else {
            deselectSubjectAction(event.target.value);
        }

    }, [selectSubjectAction]);

    return (
        <div className={style.flex}>
            {
                subjectsList.map((subject, index) => {
                    return (
                        <div key={index} className={style.flex}>
                            <p>{subject}</p>
                            <input type="checkbox" onChange={(event) => selectSubject(event)}
                                value={subject} className={style.checkbox} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default SubjectsFilter