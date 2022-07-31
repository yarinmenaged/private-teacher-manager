const SubjectsService = require("../services/subjects/subjectsService");

async function GetAllSubjects(req, res, next){
    try{
        const subjects = await SubjectsService.GetAllSubjects();
        return res.status(200).json(subjects);
    }catch(error){
        next(error);
    }
}

async function addSubjects(req, res, next){
    try{
        await SubjectsService.addSubjects(req.params.id, req.body.subjectsList);
        return res.status(200).json({health: "ok"});
    }catch(error){
        next(error);
    }
}

const SubjectsController = {
    addSubjects,
    GetAllSubjects,
};

module.exports = SubjectsController;