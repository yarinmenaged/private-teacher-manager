import React, { useCallback, useEffect, useState, useRef } from 'react';
import moment from 'moment';
import EventConstants from './Constants';
import style from './Event.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';

const Event = ({ event, user_type, my_user_id, calender_user_id, DeleteEventAction }) => {
  const time = moment(event.date).format(EventConstants.TimeFormat);
  const actions_flag = useRef(true);
  const [event_text, setEventText] = useState("");
  const [style_for_event, setStyleForEvent] = useState("");
  const blocked_flag = useRef(false);

  const delete_call_back = useCallback(() => {
    if (actions_flag)
      DeleteEventAction(event.id)
  }, [DeleteEventAction, event, actions_flag]);

  const action_section = () => (<div className={style.actions}>
    <div className={style.delete} onClick={delete_call_back}>
      <FaTrashAlt></FaTrashAlt>
    </div>
    <div className={style.info}>
      <BsInfoLg></BsInfoLg>
    </div>
  </div>);
  useEffect(() => {
    if (event.StudentId && event.Student.User_info_id === my_user_id && user_type !== EventConstants.USER_TYPE.Teacher) {
      blocked_flag.current = false;
      if (calender_user_id === my_user_id)
        setEventText(`You have a class with teacher: ${event.Teacher.UserInfo.Name}`);
      else if (calender_user_id === event.Teacher.User_info_id)
        setEventText(`You have a class with this teacher`);
    } else if (event.StudentId && user_type === EventConstants.USER_TYPE.Teacher) {
      blocked_flag.current = false;
      setEventText(`You have a class with student: ${event.Student.UserInfo.Name}`);
    } else {
      blocked_flag.current = true;
      if (user_type === EventConstants.USER_TYPE.Teacher)
        setEventText(`You blocked this hour.`);
      else {
        setEventText(`The teacher is unavailable at this hour.`);
        actions_flag.current = false;
      }      
    }
    setStyleForEvent(blocked_flag.current ? style.blocked : style[`color_${event.SubjectId}`]);
  }, [event, user_type, calender_user_id, my_user_id]);

  return (<>
    <div className={`${style.event} ${style_for_event}`}>
      <h3 className={style.title}>{event_text}</h3>
      <p className={style.text}>{time}</p>
    </div>
    {actions_flag.current && action_section()}
  </>);
}

export default Event;
