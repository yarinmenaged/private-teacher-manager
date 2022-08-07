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
    const [info, setInfo] = useState({});
    const [info_of_label, setInfoOfLabel] = useState("");
    
    useEffect(() => {
        const date_obj = new Date(event.date);
        setStartingTime(moment.utc(date_obj).format(EventConstants.TimeFormat));
        setDate(moment.utc(date_obj).format(EventConstants.DATE_FORMAT));
        if(user_type !== EventConstants.USER_TYPE.Teacher){
            setInfo(event.Teacher.UserInfo);
            setInfoOfLabel(EventConstants.USER_TYPE.Teacher);
        }else{
            setInfo(event.Student.UserInfo);
            setInfoOfLabel(EventConstants.USER_TYPE.Student);
        }
    }, [event, user_type])

    return (
        <div className={style.info_container} onClick={event => event.stopPropagation()}>
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
                            { info_of_label }
                        </span>
                        <span>{info?.Name}</span>
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
                            { `${info_of_label} Phone` }
                        </span>
                        <span>{info?.Phone}</span>
                    </div>
                    <div className={style.attribute}>
                        <span>
                            <AiOutlineMail></AiOutlineMail>
                            { `${info_of_label} Email` }
                        </span>
                        <span>{info?.Email}</span>
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
