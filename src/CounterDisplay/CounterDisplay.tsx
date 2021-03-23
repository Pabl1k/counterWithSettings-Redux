import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {InitialStateType} from "../redux/counter-reducer-types";
import {IncDisplayValueAC, ResetDisplayValueAC} from "../redux/counter-reducer";
import {Display} from "./Display/Display";
import {Button} from "./Display/Button";

export const CounterDisplay = () => {
    const dispatch = useDispatch()

    const counter = useSelector<RootStateType, InitialStateType>(state => state.counter)

    let incValue = () => {
        dispatch(IncDisplayValueAC())
    }
    let resetValue = () => {
        dispatch(ResetDisplayValueAC())
    }

    return (
        <div>
            <Display counterValue={counter.currentValue}/>
            <Button title={'INC'} onClick={incValue} disable={counter.currentValue === counter.maxValue}/>
            <Button title={'RESET'} onClick={resetValue} disable={counter.currentValue === counter.minValue}/>

        </div>
    )
}