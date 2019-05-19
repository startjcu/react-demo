import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

class TodoCss extends Component {

    constructor(props) {
        super(props)
        this.state = { list: [] }
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition key={index}
                                    in={this.state.flag}
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    appear={true}
                                    onEntered={(el) => { el.style.color = 'red' }}
                                >
                                    <div>{item}</div>
                                </CSSTransition>)
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleBtnClick.bind(this)}>toggle</button>
            </Fragment>
        )
    }

    handleBtnClick() {
        this.setState(() => ({
            list: [...this.state.list, 'item']
        }))
    }
}

export default TodoCss