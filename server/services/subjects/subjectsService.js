const { Subjects, TeachingSubjects } = require('../../db/models');
const { GetTeacherById } = require('../storage/UserStorageService')

async function GetAllSubjects() {
    try {
        return await Subjects.findAll({
            attributes: ["id", "Name"],
        });

    } catch (error) {
        throw error;
    }
}

async function insertSubject(teacherId, subject) {
    try {
        return await TeachingSubjects.create(
            {
                TeacherId: teacherId,
                SubjectId: subject
            },
        );

    } catch (error) {
        throw error;
    }
}

async function removeSubject(teacherId, subject) {
    try {
        return await TeachingSubjects.destroy(
            {
                where: { TeacherId: teacherId, SubjectId: subject }
            },
        );

    } catch (error) {
        throw error;
    }
}

async function addSubject(id, subject) {
    try {
        const teacher = await GetTeacherById(id);
        return await insertSubject(teacher.id, subject);

    } catch (error) {
        throw error;
    }
}

async function deleteSubject(id, subject) {
    try {
        const teacher = await GetTeacherById(id);
        return await removeSubject(teacher.id, subject);

    } catch (error) {
        throw error;
    }
}

const SubjectsService = {
    addSubject,
    deleteSubject,
    GetAllSubjects,
};

module.exports = SubjectsService;