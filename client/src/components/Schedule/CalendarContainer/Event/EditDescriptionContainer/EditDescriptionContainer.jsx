import React, { useRef, useCallback, useState } from 'react';
import style from './EditDescriptionContainer.module.css';
import { Flex, Button, TextField } from 'monday-ui-react-core';
import { AiOutlineClose } from 'react-icons/ai';
import AddIcon from "monday-ui-react-core/dist/icons/Add";

const EditDescriptionContainer = ({ event_id, description, close_call_back, UpdateDescriptionAction }) => {
    const input_ref = useRef(null);

    const submit_click = useCallback(() => {
        UpdateDescriptionAction(event_id, input_ref.current.value);
    }, [UpdateDescriptionAction, event_id]);

    return (
        <div className={style.description_container} onClick={event => event.stopPropagation()}>
            <div className={style.description_inner_container}>
                <div className={style.controls}>
                    <div onClick={close_call_back}>
                        <AiOutlineClose></AiOutlineClose>
                    </div>
                </div>
                <Flex direction={Flex.directions.COLUMN} justify={Flex.justify.CENTER} gap={10}>
                    <TextField placeholder={description} size={TextField.sizes.LARGE} setRef={input_ref}/>
                    <Button
                        onClick={submit_click}
                        size={Button.sizes.MEDIUM}
                        rightIcon={AddIcon}
                        className={style.button}>
                        Submit
                    </Button>
              </Flex>
            </div>
        </div>
    )
}

export default EditDescriptionContainer;
