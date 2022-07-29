const { Subjects, TeachingSubjects } = require('../../db/models');
const { GetTeacherById } = require('../storage/UserStorageService')

async function GetAllSubjects(){
    try{
        return await Subjects.findAll({
            attributes: ["Name"],
        });

    }catch(error){
        throw error;
    }
}

async function insertSubject(teacherId, subjectsList){
    try{
        return await TeachingSubjects.create(
            {
                TeacherId: teacherId,
                SubjectId: subjectsList
            },
        );

    }catch(error){
        throw error;
    }
}

async function addSubjects(id, subjectsList){
    try{
        const teacher = await GetTeacherById(id);

        await Promise.all(
            subjectsList.map(async (subject) => {
                return await insertSubject(teacher.id, subject);
            })
        )

    }catch(error){
        throw error;
    }
}

const SubjectsService = {
    addSubjects,
    GetAllSubjects
};

module.exports = SubjectsService;