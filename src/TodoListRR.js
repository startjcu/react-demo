import React from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { getInputChangeAction, getAddItemAction, getDelItemAction } from './storeRR/actionCreators'

const TodoListRR = (props) => {
    const { inputValue, handleInputChange, list, handleBtnClick, handleItemClick, handleKeyDown } = props
    return (
        <div style={{ margin: '10px 0 0 10px' }}>
            <Input
                autoFocus
                style={{ width: '300px' }}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <Button type="primary" onClick={handleBtnClick}>提交</Button>
            <List
                bordered
                dataSource={list}
                renderItem={(item, index) => (<List.Item onClick={() => { handleItemClick(index) }}>{item}</List.Item>)}
                style={{ width: '363.84px', marginTop: '5px' }}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value)
            dispatch(action)
        },
        handleBtnClick() {
            const action = getAddItemAction()
            dispatch(action)
        },
        handleItemClick(index) {
            const action = getDelItemAction(index)
            dispatch(action)
        },
        handleKeyDown(e) {
            if (e.keyCode === 13) {
                const action = getAddItemAction()
                dispatch(action)
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListRR)