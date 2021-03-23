import React from "react";
import {Input} from "./Input";

type PropsType = {
    minValue: number
    maxValue: number
    changeMinValue: (minValue: number) => void
    changeMaxValue: (maxValue: number) => void
}

export const SettingsDisplay = (props: PropsType) => {
    return(
        <div>
            <Input value={props.minValue}
                   callback={props.changeMinValue} />
            <Input value={props.maxValue}
                   callback={props.changeMaxValue} />
        </div>
    )
}
