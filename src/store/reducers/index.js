import { combineReducers } from 'redux';
import feedbacks from './feedbacks';

export const rootReducer = combineReducers({
    feedbacks,
});

export default rootReducer;