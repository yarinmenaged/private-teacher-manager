import style from "../Profile.module.css";
import { useNavigate } from "react-router-dom";
import SearchTeacher from "../../SearchTeacher/SearchTeacherConnector";
import { useCallback, useState } from "react";
import { Icon, Flex, Dropdown } from 'monday-ui-react-core';
import {
    Email, PersonRound, Mobile, Description, Academy
} from "monday-ui-react-core/dist/allIcons";
import cx from 'classnames'

function SingleProfile({
    teacherInfo,
    SetCalendarToUserAction,
    selectSubjectAction,
    resetSubjectsAction,
    chooseTeacherAction,
    selectedSubjects,
}) {

    const teacherSubjects = teacherInfo.subjects.map(subject => subject.id);
    const subjectsOptions = selectedSubjects.filter(subject =>
        teacherSubjects.includes(subject.id)).map(subject =>
        ({
            value: subject.Name,
            label: subject.Name,
            id: subject.id,
        }));

    const [value, reRender] = useState(0);

    const navigate = useNavigate();

    const [displayDropdown, setDisplayDropdown] = useState(false);

    const goToCalender = useCallback(() => {
        chooseTeacherAction(teacherInfo.id);
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
                    <h3><Icon iconSize={30} icon={Academy} /> {teacherInfo.Name}</h3>
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
                    <Flex align={Flex.align.END}>
                        <button className={style.button}
                            onClick={() => {
                                reRender(e => e + 1)
                                if (subjectsOptions.length > 1) {
                                    setDisplayDropdown(!displayDropdown);
                                } else {
                                    goToCalender();
                                }
                            }}>
                            Schedule a lesson!
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
