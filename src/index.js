import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import createHistory  from 'history/createBrowserHistory';
import storage from 'redux-persist/es/storage';
import reductor_libros from './reductores/reductor_libros';

import Pomodoros from './componentes/pomodoros';
import './index.css';

const config = {
    key: 'pomodoros_storage',
    storage
};

const history = createHistory();
const middleware = routerMiddleware(history);

const reducer = persistReducer(config, combineReducers({
    ...reductor_libros,
    router: routerReducer
}));

let store = createStore(
    reducer,
    applyMiddleware(middleware)
);

persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Pomodoros />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
