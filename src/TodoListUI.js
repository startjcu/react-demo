import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
    render() {
        const { inputValue, handleInputChange, handleKeyDown, handleBtnClick, list, handleItemClick } = this.props
        return (
            <div style={{ margin: '10px 0 0 10px' }}>
                <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder='todo item'
                    style={{ width: '300px' }}
                />
                <Button
                    type="primary"
                    onClick={handleBtnClick}
                >提交</Button>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => { handleItemClick(index) }}>{item}</List.Item>)}
                    style={{ width: '363.84px', marginTop: '5px' }}
                />
            </div>
        )
    }
}

export default TodoListUI