import React, {useCallback, useEffect} from "react";
import {SetMaxValueAC, SetMinValueAC, SetValueAC, useDispatch} from "../redux/counter-reducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {InitialStateType} from "../redux/counter-reducer-types";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {Button} from "../CounterDisplay/Display/Button";
import s from './CounterSettings.module.css'

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

    useEffect(() => {
        function saveSettingsState<T>(key: string, settingsState: T) {
            const stateAsString = JSON.stringify(settingsState);
            localStorage.setItem(key, stateAsString)
        }

        saveSettingsState<SettingsStateType>('start value', {
            minValue: settingsState.minValue,
            maxValue: settingsState.maxValue
        })
    }, [counter.minValue, counter.maxValue])

    let setValue = useCallback(() => dispatch(SetValueAC()), [dispatch])
    let setMinValue = useCallback((inputMinValue: number) => dispatch(SetMinValueAC(inputMinValue)), [dispatch])
    let setMaxValue = useCallback((inputMaxValue: number) => dispatch(SetMaxValueAC(inputMaxValue)), [dispatch])
    return (
        <div>
            <SettingsDisplay minValue={counter.minValue}
                             maxValue={counter.maxValue}
                             changeMinValue={setMinValue}
                             changeMaxValue={setMaxValue}
            />
            <div className={s.setButton}>
            <Button onClick={setValue}
                    title={'SET'}
                    disable={counter.minValue >= counter.maxValue || counter.minValue < 0}
                    />
            </div>
        </div>
    )
}