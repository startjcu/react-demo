import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    render() {
        const { item } = this.props
        return <li onClick={this.handleDelete}>{item}</li>
    }

    handleDelete(index) {
        const { deleteItem } = this.props
        deleteItem(index)
    }
}

export default TodoItem