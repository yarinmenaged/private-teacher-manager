import style from "../Profile.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { Icon, Flex, Dropdown } from "monday-ui-react-core";
import {
  Email,
  Description,
  Academy,
  Location,
} from "monday-ui-react-core/dist/allIcons";
import cx from "classnames";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import teacherImg from '../../../images/unknown-person.png';

function SingleProfile({
  teacherInfo,
  SetCalendarToUserAction,
  selectSubjectAction,
  resetSubjectsAction,
  chooseTeacherAction,
  selectedSubjects,
}) {
  const teacherSubjects = teacherInfo.subjects.map((subject) => subject.id);
  const subjectsOptions = selectedSubjects
    .filter((subject) => teacherSubjects.includes(subject.id))
    .map((subject) => ({
      value: subject.Name,
      label: subject.Name,
      id: subject.id,
    }));

  const [value, reRender] = useState(0);

  let img;
  useEffect(() => {
    
  }, []);

  useEffect(() => {
    console.log({ teacherInfo });
    if (value > 0) {
      if (subjectsOptions.length > 1) {
        setDisplayDropdown(!displayDropdown);
      } else {
        goToCalender();
      }
    }
  }, [value]);

  const navigate = useNavigate();

  const [displayDropdown, setDisplayDropdown] = useState(false);

  const goToCalender = useCallback(() => {
    chooseTeacherAction(teacherInfo.id);
    SetCalendarToUserAction(teacherInfo.id);
    navigate("/schedule");
  }, [teacherInfo, SetCalendarToUserAction, navigate]);

  const selectSubject = useCallback(
    (event) => {
      resetSubjectsAction();
      selectSubjectAction({ id: event.id, value: event.value });
    },
    [selectSubjectAction, resetSubjectsAction]
  );

  return (
    <div>
      <Flex className={style.card} align={Flex.align.START}>

        <div className={style.column} style={{ width: "10%", paddingLeft: "40px", marginRight: "5%" }}>
          <img src={`http://localhost:2000/users/img/${teacherInfo.id}`} className={style.profileImg} ></img>
        </div>

        <div className={style.column} style={{ width: "35%" }}>
          <h3>
            <Icon iconSize={30} icon={Academy} /> {teacherInfo.Name}
          </h3>

          <p>
            <Icon iconSize={25} icon={Email} />
            <a href={`mailto:${teacherInfo.Email}`} className={style.link}>
              {teacherInfo.Email}
            </a>
          </p>

          <p>
            <BsWhatsapp className={style.whatsapp} />
            <a
              className={style.link}
              href={`https://api.WhatsApp.com/send?phone=${teacherInfo.Phone}`}
            >
              {" "}
              {teacherInfo.Phone}
            </a>
          </p>

          <p>
            <Icon iconSize={25} icon={Location} /> {teacherInfo.Location}
          </p>

          <p>
            <HiOutlineCurrencyDollar /> {teacherInfo.price}
          </p><br />
        </div>

        <div className={style.column} style={{ width: "50%" }}>
          <h3>
            <Icon icon={Description} /> About
          </h3>
          <p>{teacherInfo.About}</p>
          <h3>I'm teaching:</h3>
          <Flex>
            {teacherInfo.subjects.map((subject, index) => (
              <div key={index} style={{ marginRight: "20px" }}>
                {subject.Name}
              </div>
            ))}
          </Flex>
          <br />
          <Flex align={Flex.align.END}>
            <button
              className={style.button}
              onClick={() => {
                reRender((e) => e + 1);
              }}
            >
              Schedule a lesson!
            </button>
            <br />
            {displayDropdown && (
              <Dropdown
                options={subjectsOptions}
                onChange={(event) => {
                  selectSubject(event);
                  goToCalender();
                }}
                clearable={false}
                size={Dropdown.size.SMALL}
                placeholder="Select Subject"
                className={cx(
                  "dropdown-stories-styles_big-spacing",
                  style.smallDropDown
                )}
              />
            )}
          </Flex>
        </div>
      </Flex>
    </div>
  );
}

export default SingleProfile;
