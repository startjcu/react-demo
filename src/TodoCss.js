import React, { Component, Fragment } from 'react'
import './style.css'

class TodoCss extends Component {

    constructor(props) {
        super(props)
        this.state = { flag: true }
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.flag ? 'show' : 'hide'}>hello</div>
                <button onClick={this.handleBtnClick.bind(this)}>toggle</button>
            </Fragment>
        )
    }

    handleBtnClick() {
        this.setState(() => ({
            flag: !this.state.flag
        }))
    }
}

export default TodoCss