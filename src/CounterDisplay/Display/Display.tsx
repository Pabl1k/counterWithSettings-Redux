import React from "react";

type PropsType = {
    counterValue: number
}

export const Display = (props: PropsType) => {
    return(
        <div>
            {props.counterValue}
        </div>
    )
}