/**
 * Created by stan229 on 5/27/16.
 */
import { combineReducers } from 'redux';
import wipay from "./redux/reducers";

const rootReducer = combineReducers({
    wipay : wipay
})

export default rootReducer;