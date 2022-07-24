const { Subject } = require('../../db/models');

async function GetAllSubjects(){
    try{
        return await Subject.findAll();
    }catch(error){
        throw error;
    }
}

const SubjectsService = {
    GetAllSubjects
};

module.exports = SubjectsService;