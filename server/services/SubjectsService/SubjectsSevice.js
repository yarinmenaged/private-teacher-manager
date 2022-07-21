const { Subjects, sequelize } = require("../../db/models");

const getSubjectById = async (id) => {
	debugger;
	const currentSubject = await Subjects.findAll({
		where: { id },
	});
	return currentSubject;
};

const addSubject = async (subjectObj) => {
	debugger;
	const currentSubject = await Subjects.create(subjectObj);
	return currentSubject;
};
module.exports = { getSubjectById, addSubject };
