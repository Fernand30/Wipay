import { createStore, applyMiddleware } from 'redux';

import getRootReducer from './reducers';

export default function getStore() {
    const store = createStore(
        getRootReducer,
    );

    return store;
}