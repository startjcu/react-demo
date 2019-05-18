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
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <TodoItem key={index} item={item} deleteItem={this.handleItemClick.bind(this, index)} />
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemClick(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default TodoList