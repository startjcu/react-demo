import React from 'react';
import ReactDOM from 'react-dom';
import TodoListRR from './TodoListRR';
import { Provider } from 'react-redux'
import store from './storeRR'

const App = (
    <Provider store={store}>
        <TodoListRR />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));