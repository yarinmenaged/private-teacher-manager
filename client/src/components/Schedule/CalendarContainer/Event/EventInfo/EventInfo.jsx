import React, { useState, useEffect } from 'react';
import style from './EventInfo.module.css';
import { Flex } from 'monday-ui-react-core';
import { AiOutlineClose, AiOutlineFieldTime, AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { MdDateRange, MdSubject, MdOutlineNotes, MdLocationOn } from 'react-icons/md';
import { IoIosResize } from 'react-icons/io';
import moment from 'moment';
import EventConstants from '../Constants';

const EventInfo = ({ event, close_call_back, user_type }) => {
    const [starting_time, setStartingTime] = useState("");
    const [date, setDate] = useState("");
    
    useEffect(() => {
        const date_obj = new Date(event.date);
        setStartingTime(moment.utc(date_obj).format(EventConstants.TimeFormat));
        setDate(moment.utc(date_obj).format(EventConstants.DATE_FORMAT));
    }, [event])

    return (
        <div className={style.info_container}>
            <div className={style.info_inner_container}>
                <div className={style.controls}>
                    <div onClick={close_call_back}>
                        <AiOutlineClose></AiOutlineClose>
                    </div>
                </div>
                <Flex justify={Flex.justify.CENTER} gap={100}>
                    <div className={style.attribute}>
                        <span>
                            <BsFillFileEarmarkPersonFill></BsFillFileEarmarkPersonFill>
                            { user_type !== EventConstants.USER_TYPE.TEACHER ? `Teacher` : `Student` }
                        </span>
                        <span>{event.Teacher.UserInfo.Name}</span>
                    </div>
                    <div className={style.attribute}>
                        <span>
                            <MdSubject></MdSubject>
                            Subject
                        </span>
                        <span>{event.Subject.Name}</span>
                    </div>
                </Flex>
                <Flex justify={Flex.justify.CENTER} gap={100}>
                    <div className={style.attribute}>
                        <span>
                            <MdDateRange></MdDateRange>
                            Date
                        </span>
                        <span>{date}</span>
                    </div>
                    <div className={style.attribute}>
                        <span>
                            <AiOutlineFieldTime></AiOutlineFieldTime>
                            Starting Time
                        </span>
                        <span>{starting_time}</span>
                    </div>
                </Flex>
                <Flex justify={Flex.justify.CENTER} gap={100}>
                    <div className={style.attribute}>
                        <span>
                            <AiFillPhone></AiFillPhone>
                            { user_type !== EventConstants.USER_TYPE.TEACHER ? `Teacher Phone` : `Student Phone` }
                        </span>
                        <span>{event.Teacher.UserInfo.Phone}</span>
                    </div>
                    <div className={style.attribute}>
                        <span>
                            <AiOutlineMail></AiOutlineMail>
                            { user_type !== EventConstants.USER_TYPE.TEACHER ? `Teacher Email` : `Student Email` }
                        </span>
                        <span>{event.Teacher.UserInfo.Email}</span>
                    </div>
                </Flex>
                <Flex justify={Flex.justify.CENTER} gap={100}>
                <div className={style.attribute}>
                        <span>
                            <IoIosResize></IoIosResize>
                            Lesson Length
                        </span>
                        <span>{event.duration} min</span>
                    </div>        
                    <div className={style.attribute}>
                        <span>
                            <MdLocationOn></MdLocationOn>
                            Location
                        </span>
                        <span>{event.Teacher.UserInfo.Location}</span>
                    </div>                    
                </Flex>
                <Flex justify={Flex.justify.CENTER} gap={100}>
                    <div className={style.attribute}>
                        <span>
                            <MdOutlineNotes></MdOutlineNotes>
                            Description
                        </span>
                        <span>{event.description}</span>
                    </div>                    
                </Flex>
            </div>            
        </div>
    )
}

export default EventInfo;
