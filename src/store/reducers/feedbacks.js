import {createReducer} from '../../util';
import * as actions from '../actions/feedbacks';

const initialStatusState = {
    error: false,
    errorMessage: '',
    pending: false,
};

const initialState = {
    data: [],
    list: {
        ...initialStatusState,
    },
    create: {
        ...initialStatusState,
    },
};

export default createReducer(initialState, {
    [actions.FEEDBACKS_LIST_PENDING]: (state) => ({ 
        ...state, 
        list: {
            pending: true,
        },
    }),
    [actions.FEEDBACKS_LIST_FULFILLED]: (state, feedbacks) => ({
        ...state,
        list: {
            ...initialStatusState,
        },
        data: feedbacks,
    }),
    [actions.FEEDBACKS_LIST_REJECTED]: (state, errorMessage) => ({
        ...state,
        list: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    }),
    [actions.FEEDBACKS_CREATE_PENDING]: (state) => ({ 
        ...state, 
        create: {
            pending: true,
        },
    }),
    [actions.FEEDBACKS_CREATE_FULFILLED]: (state) => ({
        ...state,
        create: {
            ...initialStatusState,
        }
    }),
    [actions.FEEDBACKS_CREATE_REJECTED]: (state, errorMessage) => ({
        ...state,
        create: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    }),
});
