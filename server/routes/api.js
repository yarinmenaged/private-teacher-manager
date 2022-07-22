const { AddNewTeacher, AddNewStudent } = require("../services/storage/UserStorageService");

async function addTeacher(req, res) {
    console.log("create teacher");
    const newTeacher = await AddNewTeacher(req.body);
    res.status(200).json(newTeacher);
}

async function addStudent(req, res) {
    console.log("create student");
    const newStudent = await AddNewStudent(req.body);
    res.status(200).json(newStudent);
}

module.exports = {
    addTeacher, addStudent
}