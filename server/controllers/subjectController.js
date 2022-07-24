const SubjectsService = require("../services/subjects/subjectsService");

async function GetAllSubjects(req, res, next){
    try{
        const subjects = await SubjectsService.GetAllSubjects();
        return res.status(200).json({
            status: 200,
            subjects: subjects
        })
    }catch(error){
        next(error);
    }
}

const SubjectsController = {
    GetAllSubjects
};

module.exports = SubjectsController;