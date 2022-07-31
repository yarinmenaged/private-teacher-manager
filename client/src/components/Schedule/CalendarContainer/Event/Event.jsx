import React from 'react';
import moment from 'moment';
import EventConstants from './Constants';
import style from './Event.module.css';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import EventInfo from './EventInfo/EventInfo';
import EditDescriptionContainerConnector from './EditDescriptionContainer/EditDescriptionContainerConnector';

const Event = ({ event, user_type, my_user_id, calender_user_id, DeleteEventAction }) => {
  const [time, setTime] = useState(moment([]).format(EventConstants.TimeFormat));
  const actions_flag = useRef(true);
  const [event_text, setEventText] = useState("");
  const [style_for_event, setStyleForEvent] = useState("");
  const [info_show, setInfoShow] = useState(false);
  const [edit_description_container, setEditDescriptionContainer] = useState(false);
  const blocked_flag = useRef(false);

  const delete_call_back = useCallback(() => {
    if (actions_flag.current)
      DeleteEventAction(event.id)
  }, [DeleteEventAction, event, actions_flag]);

  const info_button_click = useCallback(() => {
    setInfoShow((value) => !value);
  }, [setInfoShow]);

  const edit_button_click = useCallback(() => {
    setEditDescriptionContainer((value) => !value);
  }, [setEditDescriptionContainer]);

  const action_section = () => (<div className={style.actions}>
    <div className={style.delete} onClick={delete_call_back}>
      <FaTrashAlt></FaTrashAlt>
    </div>
    <div className={style.info} onClick={info_button_click}>
      <BsInfoLg></BsInfoLg>
    </div>
    {user_type === EventConstants.USER_TYPE.Teacher &&
      <div className={style.edit} onClick={edit_button_click}>
        <FaPencilAlt></FaPencilAlt>
      </div>}
  </div>);

  useEffect(() => {
    if (event){
      if (event.StudentId && event.Student.User_info_id === my_user_id && user_type !== EventConstants.USER_TYPE.Teacher) {
        blocked_flag.current = false;
        if (calender_user_id === '')
          setEventText(`Teacher: ${event.Teacher.UserInfo.Name}`);
        else if (calender_user_id === event.Teacher.User_info_id)
          setEventText(`You have a class with this teacher`);
      } else if (event.StudentId && user_type === EventConstants.USER_TYPE.Teacher) {
        blocked_flag.current = false;
        setEventText(`Student: ${event.Student.UserInfo.Name}`);
      } else {
        blocked_flag.current = true;
        setEventText(`blocked`);
        if (user_type !== EventConstants.USER_TYPE.Teacher)          
          actions_flag.current = false;
      }
    setStyleForEvent(blocked_flag.current ? style.blocked : style[`color_${event.SubjectId}`]);
    setTime(moment(event.date).format(EventConstants.TimeFormat));
  }
  }, [event, user_type, my_user_id, calender_user_id]);

  return (<>
    <div className={`${style.event} ${style_for_event}`}>
      <h3 className={style.title}>{event_text}</h3>
      <p className={style.text}>{time}</p>
    </div>
    {actions_flag.current && action_section()}
    {info_show && <EventInfo event={event} close_call_back={info_button_click}></EventInfo>}
    {edit_description_container && <EditDescriptionContainerConnector event_id={event.id} description={event.description} close_call_back={edit_button_click}></EditDescriptionContainerConnector>}
  </>);
}

export default Event;
