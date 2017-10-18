import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import createHistory  from 'history/createBrowserHistory';
import storage from 'redux-persist/es/storage';
import reductor_libros from './reductores/reductor_libros';
import reductor_tareas from './reductores/reductor_tareas';

import Pomodoros from './componentes/pomodoros';
import './index.css';

const config = {
    key: 'pomodoros_storage',
    storage
};

const history = createHistory();
const middleware = applyMiddleware(routerMiddleware(history), thunk);

const reducer = persistReducer(config, combineReducers({
    ...reductor_libros,
    ...reductor_tareas,
    router: routerReducer
}));

let store = createStore(
    reducer,
    middleware
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
