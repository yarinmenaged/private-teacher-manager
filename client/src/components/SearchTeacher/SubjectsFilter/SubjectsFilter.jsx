import { useState } from 'react';
import { useCallback } from 'react';
import style from './SubjectsFilter.module.css';
import SUBJECTS_LIST from './subjectsConstant';

function SubjectsFilter({ selectSubjectAction, deselectSubjectAction, selectedSubjects }) {

    const selectSubject = useCallback((event) => {

        if (event.target.checked) {
            selectSubjectAction(event.target.name);
        } else {
            deselectSubjectAction(event.target.name);
        }

    }, [selectSubjectAction]);

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

export default SubjectsFilter