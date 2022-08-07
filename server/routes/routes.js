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
  getImgUrl
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
router.get("/img/:id", getImgUrl);

module.exports = router;
