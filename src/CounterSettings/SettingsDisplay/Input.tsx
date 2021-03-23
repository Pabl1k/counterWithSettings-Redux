import React from "react";

type PropsType = {
    value: number
    callback: (value: number) => void
}

export const Input = (props: PropsType) => {
    return (
        <div>
            <input type="number"
                   value={props.value}
                   onChange={(e) => props.callback(e.currentTarget.valueAsNumber)}
                   />

        </div>
    )
}
