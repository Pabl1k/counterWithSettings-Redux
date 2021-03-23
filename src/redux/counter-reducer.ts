type InitialStateType = {
    counter: number
}
type ActionType = IncValueType

type IncValueType = {
    type: 'INC_VALUE'
}

let initialState = {
    counter: 0
}

export const CounterReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type){
        case 'INC_VALUE': {
            return{
                ...state, counter: state.counter + 1
            }
        }
        default:
            return state
    }
}

export const incValueAC = () => ({type: 'INC_VALUE'} as const)
