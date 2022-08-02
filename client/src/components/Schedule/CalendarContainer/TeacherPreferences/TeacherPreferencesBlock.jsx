import moment from 'moment';
import React, { useState, useEffect } from 'react';
import EventConstants from '../Event/Constants';
import style from './TeacherPreferences.module.css';

const TeacherPreferencesBlock = ({ start, blocked_size }) => {
    const [end, setEnd] = useState("");
    const [start_formatted, setStartFormatted] = useState("");
    useEffect(() => {
        const blocks = blocked_size / 9;
        const time = moment.utc(start, "hh:mm:ss");
        setStartFormatted(time.format(EventConstants.TimeFormat));
        setEnd(time.add(blocks, 'hours').format(EventConstants.TimeFormat));
    }, []);
  return (
    <div className={`${style.block} ${style.blocked_color}`}>
      <h3 className={style.title}>blocked</h3>
      <p>{start_formatted} - {end}</p>
    </div>
  )
}

export default TeacherPreferencesBlock;
