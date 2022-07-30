const SubjectsService = require("../services/subjects/subjectsService");

async function GetAllSubjects(req, res, next){
    try{
        const subjects = await SubjectsService.GetAllSubjects();
        return res.status(200).json(subjects);
    }catch(error){
        next(error);
    }
}

async function addSubject(req, res, next){
    try{
        const newSubject = await SubjectsService.addSubject(req.params.id, req.body.subject);
        return res.status(200).json(newSubject);
    }catch(error){
        next(error);
    }
}

async function deleteSubject(req, res, next){
    try{
        const removedSubject = await SubjectsService.deleteSubject(req.params.id, req.body.subject);
        return res.status(200).json(removedSubject);
    }catch(error){
        next(error);
    }
}

const SubjectsController = {
    addSubject,
    GetAllSubjects,
    deleteSubject,
};

module.exports = SubjectsController;