import React, { useState, useEffect } from 'react';
import style from './EventInfo.module.css';
import { Flex } from 'monday-ui-react-core';
import { AiOutlineClose, AiOutlineFieldTime, AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { MdDateRange, MdSubject } from 'react-icons/md';
import moment from 'moment';
import EventConstants from '../Constants';

const EventInfo = ({ event, close_call_back }) => {
    const [starting_time, setStartingTime] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        const date_obj = new Date(event.date);
        setStartingTime(moment(date_obj).format(EventConstants.TimeFormat));
        setDate(moment(date_obj).format(EventConstants.DATE_FORMAT));
    }, [])

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
                            Teacher
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
                            Teacher Phone
                        </span>
                        <span>{event.Teacher.UserInfo.Phone}</span>
                    </div>
                    <div className={style.attribute}>
                        <span>
                            <AiOutlineMail></AiOutlineMail>
                            Teacher Email
                        </span>
                        <span>{event.Teacher.UserInfo.Email}</span>
                    </div>
                </Flex>
            </div>
        </div>
    )
}

export default EventInfo;
