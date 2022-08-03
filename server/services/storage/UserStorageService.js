const {
  Student,
  Teacher,
  UserInfo,
  Subjects,
  Settings,
  TeachingSubjects,
  sequelize,
} = require("../../db/models");
const { UserType } = require("./Constants");

async function AddNewTeacher(user_info) {
  const transaction = await sequelize.transaction();
  try {
    const user_info_row = await InsertUserInfo(user_info, transaction);
    const teacher_row = await InsertTeacher(user_info_row.id, transaction);
    const teacher_pref_row = await InsertTeacherPref(teacher_row.id, transaction);
    await transaction.commit();
    return Promise.all([user_info_row, teacher_row, teacher_pref_row]);
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
      Location: user_info.Location,
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

async function InsertTeacherPref(teacher_id, transaction){
  return await Settings.create({
    TeacherId: teacher_id
  }, { transaction: transaction });
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

async function getUserInfoByEmail(email) {
  try {
    const user = await UserInfo.findOne({
      where: {
        Email: email,
      },
      attributes: ["id", "Name", "Email", "Password", "Phone", "Location"],
    });

    return await getUserType(user);
  } catch (err) {
    console.error(err);
  }
}

const getUserType = async (user) => {
  const teacher = await GetTeacherById(user.id);
  if (teacher) {
    user.dataValues.About = teacher.About;
    user.dataValues.subject = await getSubjectsById(teacher.dataValues.id);
    user.dataValues.Type = UserType.TEACHER;
  } else {
    user.dataValues.Type = UserType.STUDENT;
  }
  return user;
};

async function getUserInfoById(userId) {
  try {
    const user = await UserInfo.findOne({
      where: {
        id: userId,
      },
      attributes: ["id", "Name", "Email", "Password", "Phone", "Location"],
    });

    return await getUserType(user);
  } catch (err) {
    console.error(err);
  }
}

async function GetTeacherById(userId) {
  return await Teacher.findOne({
    where: {
      User_info_id: userId,
    },
  });
}

async function GetStudentById(userId) {
  return await Student.findOne({
    where: {
      User_info_id: userId,
    },
  });
}

async function setAboutTeacher(userId, newAbout) {
  const teacher = await GetTeacherById(userId);
  teacher.update({
    About: newAbout,
  });
}

async function getSubjectsById(teacherId) {
	const subjectIds = await TeachingSubjects.findAll({
		where: { TeacherId: teacherId },
		attributes: ["subjectId"],
	});

	return await Promise.all(
		subjectIds.map(async (subjectId) => {
			const subject = await Subjects.findOne({
				where: { id: subjectId.dataValues.subjectId },
				attributes: ["id", "Name"],
			});
			return subject.dataValues;
		})
	);
}

async function getAllTeachers() {
  const teacherIds = await Teacher.findAll({
    attributes: ["id", "User_info_id", "About"],
  });

  return await Promise.all(
    teacherIds.map(async (teacher) => {
      const info = await UserInfo.findOne({
        where: { id: teacher.User_info_id },
        attributes: ["id", "Name", "Email", "Phone", "Location"],
      });
      info.dataValues.About = teacher.About;
      info.dataValues.subjects = await getSubjectsById(teacher.dataValues.id);
      return info;
    })
  );
}

const UserStorageService = {
  AddNewStudent,
  AddNewTeacher,
  GetStudentById,
  GetTeacherById,
  GetUserInfo,
  setAboutTeacher,
  getUserInfoByEmail,
  getUserInfoById,
  getAllTeachers,
};

module.exports = UserStorageService;
