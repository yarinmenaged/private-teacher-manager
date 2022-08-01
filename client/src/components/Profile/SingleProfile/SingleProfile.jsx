import style from "../Profile.module.css";
import { useNavigate } from "react-router-dom";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import { useCallback, useState, useEffect } from "react";
import { Icon, Flex, Dropdown } from 'monday-ui-react-core';
import {
    Email, PersonRound, Mobile, Description, Academy
} from "monday-ui-react-core/dist/allIcons";
import cx from 'classnames'

function SingleProfile({
    //chosenTeacher,
    teacherInfo,
    SetCalendarToUserAction,
    selectSubjectAction,
    resetSubjectsAction,
    subjectsOptions,
}) {
console.log(teacherInfo);
    const navigate = useNavigate();

    const [displayDropdown, setDisplayDropdown] = useState(false);

    const goToCalender = useCallback(() => {
        SetCalendarToUserAction(teacherInfo.id);
        navigate("/schedule");
    }, [teacherInfo, SetCalendarToUserAction, navigate]);

    const selectSubject = useCallback((event) => {
        resetSubjectsAction();
        selectSubjectAction({ id: event.id, value: event.value });
    }, [selectSubjectAction, resetSubjectsAction]);

    return (
        <div>
                <Flex className={style.card}>
                    <div className={style.column}>
                        <h3><Icon iconSize={30} icon={Academy} /> Teacher Profile</h3>
                        <p><Icon iconSize={20} icon={PersonRound} /> {teacherInfo.Name}</p>
                        <p><Icon iconSize={20} icon={Email} /> {teacherInfo.Email}</p>
                        <p><Icon iconSize={20} icon={Mobile} /> {teacherInfo.Phone}</p>
                    </div>

                    <div className={style.column}>
                        <h3><Icon icon={Description} /> About</h3>
                        <p>{teacherInfo.About}</p>
                        <h3>I'm teaching:</h3>
                        <Flex>
                            {
                                teacherInfo.subjects.map((subject, index) =>
                                    <div key={index} style={{ marginRight: "20px" }}>{subject.Name}</div>
                                )
                            }
                        </Flex><br />
                        <Flex>
                            <button className={style.button}
                                onClick={() => setDisplayDropdown(!displayDropdown)}>
                                Sounds interesting?
                            </button><br />
                            {
                                displayDropdown &&
                                <Dropdown
                                    options={subjectsOptions}
                                    onChange={(event) => {
                                        selectSubject(event);
                                        goToCalender();
                                    }}
                                    clearable={false}
                                    size={Dropdown.size.SMALL}
                                    placeholder="Select Subject"
                                    className={cx("dropdown-stories-styles_big-spacing", style.smallDropDown)} />
                            }
                        </Flex>
                    </div>
                </Flex>
        </div>
    );
}

export default SingleProfile;
