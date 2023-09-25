import React from 'react';
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import taskReducer from './reducers/taskReducer';
import App from './App';

const store = createStore(taskReducer)
const root =     document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
    <Provider store={store}>
        <App/>
    </Provider>,
)