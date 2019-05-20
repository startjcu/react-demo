import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDelItemAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
})

const getInitAction = (list) => ({
    type: INIT_LIST,
    list
})

export const getAjaxAction = () => {
    return (dispatch) => {
        axios.get('/api/list.json').then((res) => {
            const list = res.data.list
            const action = getInitAction(list)
            dispatch(action)
        })
    }
}