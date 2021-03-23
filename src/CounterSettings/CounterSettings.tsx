import React, {useCallback} from "react";
import {SetMaxValueAC, SetMinValueAC, SetValueAC, useDispatch} from "../redux/counter-reducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {InitialStateType} from "../redux/counter-reducer-types";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {Button} from "../CounterDisplay/Display/Button";

export const CounterSettings = () => {

    const dispatch = useDispatch()

    const counter = useSelector<RootStateType, InitialStateType>(state => state.counter)

    type SettingsStateType = {
        minValue: number
        maxValue: number
    }

    let settingsState = {
        minValue: counter.minValue,
        maxValue: counter.maxValue
    }

    let setValue = useCallback(() => dispatch(SetValueAC()), [dispatch])
    let setMinValue = useCallback((inputMinValue: number) => dispatch(SetMinValueAC(inputMinValue)), [dispatch])
    let setMaxValue = useCallback((inputMaxValue: number) => dispatch(SetMaxValueAC(inputMaxValue)), [dispatch])
    return (
        <div>
            <SettingsDisplay minValue={counter.minValue}
                             maxValue={counter.maxValue}
                             changeMinValue={setMinValue}
                             changeMaxValue={setMaxValue}/>
            <Button onClick={setValue} title={'SET'} />

        </div>
    )
}
// <Button onClick={} title={'SET'}