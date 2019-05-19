import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.item !== this.props.item) {
            return true
        } else {
            return false
        }
    }

    render() {
        const { item, test } = this.props
        return <li onClick={this.handleDelete}>{test}-{item}</li>
    }

    handleDelete(index) {
        const { deleteItem } = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    test: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
    test: 'hello'
}

export default TodoItem