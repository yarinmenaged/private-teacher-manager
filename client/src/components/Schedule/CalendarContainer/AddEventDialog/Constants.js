const TIME_FORMAT = "HH:mm";
const USER_TYPE = {
    Student: "Student",
    Teacher: "Teacher"
};

const HEADING_TEXT = (lesson_length, user_type) => `Select a ${lesson_length} min lesson ${user_type === AddEventDialogConstants.USER_TYPE.Teacher ? `to block` : ''}`

const AddEventDialogConstants = {
    TIME_FORMAT,
    USER_TYPE,
    HEADING_TEXT
};

module.exports = AddEventDialogConstants;