const express = require("express");
const multer  = require('multer');
const path = require("path");
const upload = multer({ dest: path.join(__dirname, `..//profileImages`)})

const { authVerify } = require("../services/auth/auth");

const {
  addStudent,
  addTeacher,
  loginRouter,
  setAbout,
  getTeachers,
  getUserByTokenRouter,
  setPrice,
  addImgUrl,
} = require("../controllers/userController");

const router = express.Router();
router.post("/teachers", addTeacher);
router.get("/teachers", getTeachers);
router.post("/students", addStudent);
router.post("/login", loginRouter);
router.get("/verifies", getUserByTokenRouter);
router.put("/about/:id", authVerify, setAbout);
router.put("/price/:id", authVerify, setPrice);
router.post("/upload/:id", upload.single('profileImg'), addImgUrl)
router.get("/img"/*:id*/, (req, res) => {
  res.sendFile(path.join(__dirname, `..//profileImages/cf045186ef41869e9f72b63b0f31d650`));
});

module.exports = router;
