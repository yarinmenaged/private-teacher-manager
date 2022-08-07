import style from "../Profile.module.css";
import NavBar from "../../NavBar/NavBarConnector";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import SingleProfile from "../SingleProfile/SingleProfileConnector";
import { Flex } from 'monday-ui-react-core';

function SearchProfile({ selectedTeachers, chosenTeacher }) {

    return (
        <div>
            <NavBar />
            <Flex justify={Flex.justify.CENTER} className={style.bg}>
                <SearchTeacher multipleOptions={true} />
            </Flex>
            <Flex justify={Flex.justify.CENTER} gap={15}>
                {
                    chosenTeacher
                        ? <SingleProfile teacherInfo={chosenTeacher} />
                        : selectedTeachers.length > 0 &&
                        selectedTeachers.map(teacher => {
                            return <SingleProfile key={teacher.id} teacherInfo={teacher} />
                        })
                }
            </Flex>
        </div>
    )
}

export default SearchProfile;
