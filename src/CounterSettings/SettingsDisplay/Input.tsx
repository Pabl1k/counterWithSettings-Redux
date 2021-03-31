import React from "react";
import s from './Input.module.css'
type PropsType = {
    value: number
    callback: (value: number) => void
}

export const Input = (props: PropsType) => {
    return (
        <div>
            <input type="number"
                   className={s.input}
                   value={props.value}
                   onChange={(e) => props.callback(e.currentTarget.valueAsNumber)}
                   />

        </div>
    )
}
