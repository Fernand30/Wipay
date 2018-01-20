import React from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './navigation';
import getStore from './store';

const store = getStore();
export default function App(){
    return (
        <Provider store={store} >
            <AppWithNavigationState  />
        </Provider>
    );
}
