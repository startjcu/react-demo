import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return <li onClick={this.handleDelete.bind(this)}>{this.props.item}</li>
    }

    handleDelete(index) {
        this.props.deleteItem(index)
    }
}

export default TodoItem