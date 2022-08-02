import style from "../Profile.module.css";
import NavBar from "../../NavBar/NavBarConnector";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import SingleProfile from "../SingleProfile/SingleProfileConnector";

function SearchProfile({ selectedTeachers, chosenTeacher }) {

    return (
        <div>
            <NavBar />
            <SearchTeacher multipleOptions={true} />
            {   
                chosenTeacher
                ? <SingleProfile teacherInfo={chosenTeacher} />
                : selectedTeachers.length > 0 &&
                  selectedTeachers.map(teacher => {
                 return <SingleProfile key={teacher.id} teacherInfo={teacher} />
                })
            }
        </div>
      )
}

export default SearchProfile;
