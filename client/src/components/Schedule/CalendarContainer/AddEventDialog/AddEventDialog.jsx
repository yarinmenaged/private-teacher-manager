import React, { useState, useCallback, useEffect } from 'react';
import style from "./AddEventDialog.module.css";
import { Heading, Button } from 'monday-ui-react-core';
import _ from 'lodash';
import moment from 'moment';
import ConstantsHourBlock from '../HourBlock/Constants';
import AddEventDialogConstants from './Constants';
import { AiOutlineClose } from 'react-icons/ai';

const AddEventDialog = ({ hour, date, close_call_back, events, user_type, user_id, calender_user_id, subject_id, subject_name, lesson_length, AddEventAction }) => {
  const [num_lessons, setNumLessons] = useState(0);
  const [time_obj, setTimeObj] = useState(moment.utc([]));
  const [available_lessons, setAvailableLessons] = useState([]);

  useEffect(() => {
    if (lesson_length && date) {
      setNumLessons(Number.parseInt(60 / lesson_length));
      setTimeObj(moment.utc(`${date.format(ConstantsHourBlock.DATE_FORMAT)} ${hour}`));
    }
  }, [lesson_length, date, hour]);

  useEffect(() => {
    if (lesson_length && date) {
      setAvailableLessons(() => []);
      let event_iterator = 0;
      const time = new moment.utc(`${date.format(ConstantsHourBlock.DATE_FORMAT)} ${hour}`);
      _.range(0, num_lessons).forEach(value => {
        let flag = true;
        if (events.length > event_iterator) {
          const event_time = moment.utc(events[event_iterator]?.date);
          if (time.isSame(event_time)) {
            setAvailableLessons(arr => {
              arr.push(true);
              return arr;
            });
            flag = false;
            event_iterator++;
          }
        }
        if (flag) {
          setAvailableLessons(arr => {
            arr.push(false);
            return arr;
          });
        }
        time.add(lesson_length, 'minutes');
      });
    }
  }, [events, setNumLessons, date, hour, lesson_length, num_lessons]);

  const add_event_click = useCallback((start) => {
    AddEventAction(user_id, date, start, user_type, calender_user_id, subject_id, subject_name, lesson_length);
  }, [AddEventAction, user_id, date, user_type, calender_user_id, subject_id, subject_name, lesson_length]);

  const render_lessons = useCallback(() => {
    const time = moment.utc(time_obj);
    return _.range(0, num_lessons).map(value => {
      const start_lesson = time.format(AddEventDialogConstants.TIME_FORMAT);
      const end_lesson = time.add(lesson_length, 'minutes');
      const end_lesson_formatted = end_lesson.format(AddEventDialogConstants.TIME_FORMAT);
      const disabled = available_lessons[value] ? true : false;
        return (<div className={style.options_button} key={`lesson-${start_lesson}-${end_lesson_formatted}`}>
          <Button
            onClick={() => add_event_click(start_lesson)}
            disabled={disabled}
            key={`lesson-${start_lesson}-${end_lesson_formatted}`}>
            {start_lesson} - {end_lesson_formatted}
          </Button>
        </div>);
    });
  }, [time_obj, num_lessons, available_lessons, add_event_click, lesson_length, events]);

 
  return (
    <div className={style.container}>
      <div className={style.inner_container}>
        <div className={style.controls}>
          <div  onClick={()=>close_call_back()}>
            <AiOutlineClose></AiOutlineClose>
          </div>
        </div>
        <div className={style.content}>
          <Heading type={Heading.types.h2} value={AddEventDialogConstants.HEADING_TEXT(lesson_length, user_type)} />
          {render_lessons()}
        </div>
      </div>
    </div>
  )
}

export default AddEventDialog;
