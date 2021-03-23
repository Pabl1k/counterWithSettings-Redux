import React from "react";

type PropsType = {
    onClick: () => void
    title: string
    disable?: boolean
}
export const Button = (props: PropsType) => {
    return (
        <div>
            <button onClick={props.onClick} disabled={props.disable}>{props.title}</button>

        </div>
    )
}