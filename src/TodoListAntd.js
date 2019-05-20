import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoListAntd extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)

    }

    render() {
        const { inputValue, list } = this.state
        return (
            <div style={{ margin: '10px 0 0 10px' }}>
                <Input
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder='todo item'
                    style={{ width: '300px' }}
                />
                <Button
                    type="primary"
                    onClick={this.handleBtnClick}
                >提交</Button>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => { this.handleItemClick(index) }}>{item}</List.Item>)}
                    style={{ width: '363.84px', marginTop: '5px' }}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }

    handleBtnClick() {
        const action = {
            type: 'add_todo_item'
        }
        store.dispatch(action)
    }

    handleItemClick(index) {
        const action = {
            type: 'del_todo_item',
            index
        }
        store.dispatch(action)
    }

    handleKeyDown(e) {
        if (e.keyCode === 13)
            this.handleBtnClick()
    }

    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default TodoListAntd