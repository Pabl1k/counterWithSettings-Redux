import React from "react";
import s from './Button.module.css'

type PropsType = {
    onClick: () => void
    title: string
    disable: boolean
}
export const Button = (props: PropsType) => {
    return (
        <div>
            <button className={props.disable ? `${s.disabled} ${s.button}` : s.button} onClick={props.onClick} disabled={props.disable}>{props.title}</button>
        </div>
    )
}