const { Subjects } = require('../../db/models');

async function GetAllSubjects(){
    try{
        return await Subjects.findAll({
            attributes: ["Name"],
        });
    }catch(error){
        throw error;
    }
}

const SubjectsService = {
    GetAllSubjects
};

module.exports = SubjectsService;