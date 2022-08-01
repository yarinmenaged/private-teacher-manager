import { useEffect } from 'react';
import { useCallback } from 'react';
import style from './SubjectsFilter.module.css';
import MultipleSubjectsOptions from './MultipleSubjectsOptions/MultipleSubjectsOptionsConnector';
import OneSubjectOption from './OneSubjectOption/OneSubjectOptionConnector';

function SubjectsFilter({ multipleOptions }) {
    return (
        <>
            {
                multipleOptions
                    ? <MultipleSubjectsOptions />
                    : < OneSubjectOption />
            }
        </>
    );
}

export default SubjectsFilter