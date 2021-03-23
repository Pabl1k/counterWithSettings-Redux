import {useDispatch as _useDispatch} from 'react-redux';
import {
    ActionsTypes, InitialStateType
} from "./counter-reducer-types";

export const initialState: InitialStateType = {
    minValue: 0,
    maxValue: 5,
    currentValue: 0
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        // display
        case "INC_DISPLAY_VALUE": {
            return {...state, currentValue: state.currentValue + 1}
        }
        case "RESET_DISPLAY_VALUE" : {
            return {...state, currentValue: state.minValue}
        }
        // settings
        case "SET_MAX_VALUE": {
            let stateCopy = {...state}
            stateCopy.maxValue = action.inputMaxValue
            return stateCopy
        }
        case "SET_MIN_VALUE": {
            let stateCopy = {...state}
            stateCopy.minValue = action.inputMinValue
            return stateCopy
        }
        case "SET_VALUE": {
            return {
                ...state,
                currentValue: state.currentValue = state.minValue
            }
        }
        default:
            let restoreState = <T>(key: string, defaultState: T) => {
                const stateAsString = localStorage.getItem(key);
                if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
                return defaultState;
            }

            const save = restoreState('start value', {minValue: state.minValue, maxValue: state.maxValue});
            return {...state, maxValue: save.maxValue, minValue: save.minValue, currentValue: save.minValue};
    }
}

export const IncDisplayValueAC = () => ({type: 'INC_DISPLAY_VALUE'} as const)
export const ResetDisplayValueAC = () => ({type: 'RESET_DISPLAY_VALUE'} as const)
export const SetValueAC = () => ({type: 'SET_VALUE'} as const)
export const SetMinValueAC = (inputMinValue: number) => ({type: 'SET_MIN_VALUE', inputMinValue} as const)
export const SetMaxValueAC = (inputMaxValue: number) => ({type: 'SET_MAX_VALUE', inputMaxValue} as const)

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ac: ActionsTypes) => dispatch(ac)
}