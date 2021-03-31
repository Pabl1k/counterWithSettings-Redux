import React from "react";
import s from './Display.module.css';

type PropsType = {
    counterValue: number
    maxValue: number
    minValue: number
    incorrectValueMessage: string
    setMessage: string
}

export const Display = (props: PropsType) => {
    return (
        <div className={props.maxValue <= props.counterValue || props.maxValue <= props.minValue || props.minValue < 0
            ? s.endValue
            : s.value}>
            {props.minValue <= -1 || props.minValue >= props.maxValue
                ? props.incorrectValueMessage
                : props.counterValue}
        </div>
    )
}