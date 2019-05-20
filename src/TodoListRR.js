import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class TodoListRR extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.handleInputChange} />
                    <button>submit</button>
                </div>
                <ul>
                    <li>star</li>
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListRR)