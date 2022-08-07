import filter from "lodash/filter";
import find from "lodash/find";
import { getSelectedSubjects } from "../selectors/subjectsSelector";
import { getChosenLocation } from "./locationSelector";

export const getSelectedTeachers = (state) => {
    const selectedSubjects = getSelectedSubjects(state).map(subject => subject.Name);
    const chosenLocation = getChosenLocation(state);
    const teachers = state.teachersReducer.teachers;
    return filter(teachers, teacher => {
        const subjects = teacher.subjects.map(subject => subject.Name)
        return (subjects.some(sub => selectedSubjects.indexOf(sub) >= 0)
            && ((teacher.Location === chosenLocation) || chosenLocation === "All locations"))
    });
}

export const getChosenTeacher = (state) => {
    const chosenId = state.teachersReducer.chosenTeacher;
    const teachers = state.teachersReducer.teachers;
    return (find(teachers, teacher => teacher.id === chosenId * 1));
}

export const getAreTeachersFetched = (state) => {
    return JSON.stringify(state.teachersReducer.teachers) !== '{}' ? true : false;
}