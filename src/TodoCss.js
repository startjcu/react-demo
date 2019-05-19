import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

class TodoCss extends Component {

    constructor(props) {
        super(props)
        this.state = { flag: true }
    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.flag}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    appear={true}
                    onEntered={(el) => { el.style.color = 'red' }}
                >
                    <div>hello</div>
                </CSSTransition>
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