import React from "react";
import style from "./EventList.module.css";
import Event from "./Event/Event.jsx";

function Event () {
    let arr = ["8:00-8:45", "9:00-9:45"];
    return(
        {
            arr.map((event) => <Event event={event}/>)
        }
    )
}