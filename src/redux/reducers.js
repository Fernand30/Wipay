import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = fromJS({
});

export default function wipay (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
