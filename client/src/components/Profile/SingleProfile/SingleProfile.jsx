import style from "./SingleProfile.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import { Icon, Dropdown, Button } from "monday-ui-react-core";
import {
  Email,
  Description,
  Academy
} from "monday-ui-react-core/dist/allIcons";
import { BsWhatsapp } from "react-icons/bs";
import { FaDollarSign } from 'react-icons/fa';
import { MdLocationPin, MdSubject } from 'react-icons/md';
import unknownTeacher from '../../../images/unknown-person.png';
import ApiService from "../../../services/ApiService";

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

  const [unknownProfileImg, setUnKnownProfileImg] = useState(false);

  useEffect(() => {
    initProfileImg();
  }, []);

  const initProfileImg = useCallback(async () => {
    const img = await ApiService.GetResourceRequest(`users/img/${teacherInfo.id}`);
    if (img.status) {
      setUnKnownProfileImg(true);
    }
  }, [setUnKnownProfileImg]);

  useEffect(() => {
    if (value > 0) {
      if (subjectsOptions.length > 1) {
        setDisplayDropdown(value => !value);
      } else {
        resetSubjectsAction();
        selectSubjectAction({ id: subjectsOptions[0].id, value: subjectsOptions[0].value });
        goToCalender();
      }
    }
  }, [value, resetSubjectsAction, selectSubjectAction, goToCalender]);

  return (<div className={style.card_container}>
    <div className={style.card_container_inner}>
      <div className={style.card_img}>
        {
          unknownProfileImg
            ? <img src={unknownTeacher} className={style.profileImg} ></img>
            : <img src={`http://localhost:2000/users/img/${teacherInfo.id}`} className={style.profileImg} ></img>
        }
      </div>
      <div className={style.price}>
        <FaDollarSign></FaDollarSign>
        {teacherInfo.price}
      </div>
      <div className={style.card_info}>
        <div className={style.card_more_info}>
          <span>
          <Icon iconSize={30} icon={Academy} />
            {teacherInfo.Name}
          </span>
          <span>
            <MdLocationPin></MdLocationPin>
            {teacherInfo.Location}
          </span>
          <span className={style.subjects}>
            <MdSubject></MdSubject>
            {teacherInfo.subjects.map(subject => `${subject.Name} `)}
          </span>
        </div>
      </div>
    </div>
    
      <div className={style.actions}>
        <Button
          className={style.button}
          onClick={() => {
            reRender((e) => e + 1);
          }}>
          Schedule a lesson!
        </Button>
        {displayDropdown &&
          <Dropdown
            options={subjectsOptions}
            onChange={(event) => {
              selectSubject(event);
              goToCalender();
            }}
            clearable={false}
            size={Dropdown.size.SMALL}
            placeholder="Select Subject" />
        }
      </div>
      <div className={style.extra_data}>
      <span>
        <h3>
          <Icon icon={Description} /> 
          About
        </h3>
        <p>{teacherInfo.About}</p>
      </span>
      <span>
      <BsWhatsapp className={style.whatsapp}></BsWhatsapp>
          <a
            className={style.link}
            href={`https://api.WhatsApp.com/send?phone=${teacherInfo.Phone}`}>
            {" "}
            {teacherInfo.Phone}
            </a>
      </span>
      <span>
        <Icon iconSize={25} icon={Email} />
        <a href={`mailto:${teacherInfo.Email}`} className={style.link}>
          {teacherInfo.Email}
        </a>
      </span>
    </div>
    </div>);
}

export default SingleProfile;
