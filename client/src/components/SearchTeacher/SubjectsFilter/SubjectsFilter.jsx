import { useEffect } from 'react';
import { useCallback } from 'react';
import style from './SubjectsFilter.module.css';
import MultipleSubjectsOptions from './MultipleSubjectsOptions/MultipleSubjectsOptionsConnector';
import OneSubjectOption from './OneSubjectOption/OneSubjectOptionConnector';

function SubjectsFilter() {
    return (
        <div>
            {
                window.location.href.includes("search-profile")
                    ? <MultipleSubjectsOptions />
                    : < OneSubjectOption />
            }
        </div>
    );
}

export default SubjectsFilter