export type IncreaseNumberACType = {type: 'INC_DISPLAY_VALUE'}
export type ResetNumberACType = {type: 'RESET_DISPLAY_VALUE'}
export type SetValueACType = {type: 'SET_VALUE'}
export type SetMinValueACType = {type: 'SET_MIN_VALUE', inputMinValue: number }
export type SetMaxValueACType = {type: 'SET_MAX_VALUE', inputMaxValue: number }

export type ActionsTypes = IncreaseNumberACType | ResetNumberACType | SetValueACType | SetMinValueACType | SetMaxValueACType

export type InitialStateType = {
    minValue: number
    maxValue: number
    currentValue: number
    incorrectValueMessage: string
    setMessage: string
}