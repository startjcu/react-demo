import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value
            break
        case ADD_TODO_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            break
        case DEL_TODO_ITEM:
            newState.list.splice(action.index, 1)
            break
        default:
    }
    return newState
}