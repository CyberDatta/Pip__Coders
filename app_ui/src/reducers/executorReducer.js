import { EXECUTOR_FAILED, EXECUTOR_LOADING, EXECUTOR_SUCCESS} from '../actions/actionTypes';
const INITIAL_STATE = {
    error: null,
    message: null,
    isLoading: false
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EXECUTOR_SUCCESS:
            return { ...state,  isLoading: false, message: action.payload.data, error: null }
        case EXECUTOR_FAILED:
            return { ...state, isLoading: false, message: null, error: action.payload.error }
        case EXECUTOR_LOADING:
            return { ...state, isLoading: action.payload.isLoading, message: null, error: null }
        default:
            return state
    }
}