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
            let max = action.inputMaxValue
            stateCopy.maxValue = max
            return stateCopy
        }
        case "SET_MIN_VALUE": {
            let stateCopy = {...state}
            let min = action.inputMinValue
            stateCopy.minValue = min
            return stateCopy
        }
        case "SET_VALUE": {
            return {
                ...state,
                currentValue: state.currentValue = state.minValue
            }
        }
        default:
            return state
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