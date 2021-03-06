import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import Thunk from 'redux-thunk';

import { Api } from './api';

import { userReducer } from "./modules/user";
import { eventReducer } from "./modules/event";

const reducer = combineReducers({
    user: userReducer,
    event: eventReducer
});

export function configureStore(rootInitialState = {}) {
    const api = new Api('api');

    const middlewares = [
        createLogger({ collapsed: true }),
        Thunk.withExtraArgument({ api }),
    ];

    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        reducer,
        rootInitialState,
        composeEnhancers(applyMiddleware(...middlewares)),
    )
}
