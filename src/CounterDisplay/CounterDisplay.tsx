import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {InitialStateType} from "../redux/counter-reducer-types";
import {IncDisplayValueAC, ResetDisplayValueAC} from "../redux/counter-reducer";

export const Display = () => {
    const dispatch = useDispatch()

    const counter = useSelector<RootStateType, InitialStateType>(state => state.counter)

    let incValue = () => {
        dispatch(IncDisplayValueAC())
    }
    let resetValue = () => {
        dispatch(ResetDisplayValueAC())
    }

    return(
        <div>
            {counter.currentValue}
            <button onClick={incValue}>INC</button>
            <button onClick={resetValue}>RESET</button>
        </div>
    )
}