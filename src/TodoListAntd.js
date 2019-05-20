import React, { Component } from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDelItemAction, getInitAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

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
            <TodoListUI
                inputValue={inputValue}
                handleInputChange={this.handleInputChange}
                handleKeyDown={this.handleKeyDown}
                handleBtnClick={this.handleBtnClick}
                list={list}
                handleItemClick={this.handleItemClick}
            />
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemClick(index) {
        const action = getDelItemAction(index)
        store.dispatch(action)
    }

    handleKeyDown(e) {
        if (e.keyCode === 13)
            this.handleBtnClick()
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    componentDidMount() {
        axios.get('/api/list.json').then((res) => {
            const list = res.data.list
            const action = getInitAction(list)
            store.dispatch(action)
        })
    }
}

export default TodoListAntd