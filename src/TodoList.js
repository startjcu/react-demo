import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'
import axios from 'axios'

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
                        ref={(input) => { this.input = input }}
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

    handleInputChange() {
        const value = this.input.value
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

    componentDidMount() {
        axios.get('/api/list.json').then((res) => {
            this.setState(() => ({
                list: [...res.data.list] //最好打散
            }))
        }).catch(() => { alert('error') })
    }
}

export default TodoList