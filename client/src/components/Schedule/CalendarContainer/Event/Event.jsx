import React, { useCallback } from 'react';
import moment from 'moment';
import EventConstants from './Constants';
import style from './Event.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';

const Event = ({ event, user_type, my_user_id, calender_user_id, DeleteEventAction }) => {
  const time = moment(event.date).format(EventConstants.TimeFormat);
  let actions_flag = true; 

  const delete_call_back = useCallback(() => {
    if(actions_flag)
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

  if(event.StudentId && event.Student.User_info_id === my_user_id && user_type !== EventConstants.USER_TYPE.Teacher){
    let name_string;
    if(calender_user_id === "")
      name_string = `You have a class with teacher: ${event.Teacher.UserInfo.Name}`;
    else if(calender_user_id === event.Teacher.User_info_id)
      name_string = `You have a class with this teacher`;
    return (<>
          <div className={`${style.event} ${style[`color_${event.Subject.id}`]}`} >
              <h3 className={style.title}>{name_string}</h3>
              <p className={style.text}>{time}</p>
        </div>
    { action_section() } </>);
    }else if(event.StudentId && user_type === EventConstants.USER_TYPE.Teacher){
      const name_string = `You have a class with student: ${event.Student.UserInfo.Name}`;
    return (<>
      <div className={`${style.event} ${style[`color_${event.Subject.id}`]}`}>
          <h3 className={style.title}>{name_string}</h3>
          <p className={style.text}>{time}</p>
    </div>
    { action_section() } 
    </>);
    }else{
      let blocked_event_text;
      if(user_type === EventConstants.USER_TYPE.Teacher)
        blocked_event_text = `You blocked this hour.`;
      else{ 
        blocked_event_text = `The teacher is unavailable at this hour.`;
        actions_flag = false;
      }
      return (<>
            <div className={`${style.event} ${style.blocked}`}>
                  <h3 className={style.title}>{blocked_event_text}</h3>
                  <p className={style.text}>{time}</p>
            </div>
            {actions_flag && action_section() } 
            </>);
    }
}

export default Event;
