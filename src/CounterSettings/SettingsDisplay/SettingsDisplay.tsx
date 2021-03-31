import React from "react";
import {Input} from "./Input";
import s from './SettingsDisplay.module.css'

type PropsType = {
    minValue: number
    maxValue: number
    changeMinValue: (minValue: number) => void
    changeMaxValue: (maxValue: number) => void
}

export const SettingsDisplay = (props: PropsType) => {
    return(
        <div>
            <span className={s.valueSign}>Start value: </span>
            <div className={props.minValue > -1 ? s.minInput : s.minInputError}>
            <Input value={props.minValue}
                   callback={props.changeMinValue}
                    />
            </div>
            <span className={s.valueSign}>Max value: </span>
            <div className={props.maxValue >= props.minValue ? s.maxInput : s.maxInputError}>
            <Input value={props.maxValue}
                   callback={props.changeMaxValue} />
            </div>
        </div>
    )
}
