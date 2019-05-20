import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoListAntd extends Component {

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
        const { inputValue, list } = this.state
        return (
            <div style={{ margin: '10px 0 0 10px' }}>
                <Input
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder='请输入项目'
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

export default TodoListAntd