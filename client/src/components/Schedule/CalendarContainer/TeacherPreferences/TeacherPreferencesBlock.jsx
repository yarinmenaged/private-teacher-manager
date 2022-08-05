import moment from 'moment';
import React, { useState, useEffect } from 'react';
import EventConstants from '../Event/Constants';
import style from './TeacherPreferences.module.css';
import TeacherPreferencesConstant from './Constants';

const TeacherPreferencesBlock = ({ start, blocked_size }) => {
    const [end, setEnd] = useState("");
    const [start_formatted, setStartFormatted] = useState("");
    useEffect(() => {
        const blocks = blocked_size / TeacherPreferencesConstant.ONE_BLOCK_SIZE_UNIT - 1;
        const time = moment.utc(start, TeacherPreferencesConstant.TIME_FORMAT_WITH_SECONDS);
        setStartFormatted(time.format(EventConstants.TimeFormat));
        setEnd(time.utc().add(blocks, 'hours').format(EventConstants.TimeFormat));
    }, []);
  return (
    <div className={`${style.block} ${style.blocked_color}`}>
      <h3 className={style.title}>blocked</h3>
      <p className={style.duration_text}>{start_formatted} - {end}</p>
    </div>
  )
}

export default TeacherPreferencesBlock;
