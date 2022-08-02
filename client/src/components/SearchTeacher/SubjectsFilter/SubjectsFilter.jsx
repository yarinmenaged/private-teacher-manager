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