import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        const { list } = this.state
        return list.map((item, index) => {
            return <TodoItem key={index} item={item} deleteItem={() => { this.handleItemClick(index) }} />
        })
    }
    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemClick(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })
    }
    handleKeyDown(e) {
        if (e.keyCode === 13)
            this.handleBtnClick()
    }
}

export default TodoList