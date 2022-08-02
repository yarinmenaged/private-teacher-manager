import style from "../Profile.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBarConnector";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import { useCallback, useState, useEffect } from "react";
import { Icon, Flex, Dropdown } from "monday-ui-react-core";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./SearchProfile.module.css";
import {
  Email,
  PersonRound,
  Mobile,
  Description,
  Academy,
} from "monday-ui-react-core/dist/allIcons";
import cx from "classnames";
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
      )}
    </div>
  );
}

export default SearchProfile;
