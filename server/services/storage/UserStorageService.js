const { Student, Teacher, UserInfo, sequelize } = require("../../db/models");

async function AddNewTeacher(user_info) {
	const transaction = await sequelize.transaction();
	try {
		const user_info_row = await InsertUserInfo(user_info, transaction);
		const teacher_row = await InsertTeacher(user_info_row.id, transaction);
		await transaction.commit();
		return Promise.all([user_info_row, teacher_row]);
	} catch (error) {
		transaction.rollback();
		throw error;
	}
}

async function AddNewStudent(user_info) {
	const transaction = await sequelize.transaction();
	try {
		const user_info_row = await InsertUserInfo(user_info, transaction);
		const student_row = await InsertStudent(user_info_row.id, transaction);
		await transaction.commit();
		return Promise.all([user_info_row, student_row]);
	} catch (error) {
		transaction.rollback();
		throw error;
	}
}

async function InsertUserInfo(user_info, transaction) {
	return await UserInfo.create(
		{
			Name: user_info.Name,
			Email: user_info.Email,
			Phone: user_info.Phone,
			Password: user_info.Password,
		},
		{ transaction: transaction }
	);
}

async function InsertTeacher(user_info_id, transaction) {
	return await Teacher.create(
		{
			User_info_id: user_info_id,
			About: "",
		},
		{ transaction: transaction }
	);
}

async function InsertStudent(user_info_id, transaction) {
	return await Student.create(
		{
			User_info_id: user_info_id,
			Grade: null,
		},
		{ transaction: transaction }
	);
}

async function GetUserInfo(user_info_id) {
	return await UserInfo.findOne({
		where: {
			id: user_info_id,
		},
	});
}

async function getUserInfoByEmail(email){
	try {
		return await UserInfo.findOne({
			where: {
				Email: email,
			},
			attributes: ['id', 'Name', 'Email', 'Password', 'Phone']
		});
	} catch (err) {
		console.error(err);
	}
};

async function GetTeacherById(userId) {
	return await Teacher.findOne({
		where: {
			User_info_id: userId,
		},
	});
}

async function GetStudentById(userId) {
	return await Student.findOne({
		/*include: {
			UserInfo,
		},*/
		where: {
			User_info_id: userId,
		},
	});
}

async function setAboutTeacher(userId, newAbout) {
	const teacher = await GetTeacherById(userId);
	teacher.update({
		About: newAbout
	})
}

const UserStorageService = {
	AddNewStudent,
	AddNewTeacher,
	GetStudentById,
	GetTeacherById,
	GetUserInfo,
	setAboutTeacher,
	getUserInfoByEmail
};

module.exports = UserStorageService;