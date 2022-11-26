import { GET_MAPPER_FAILED, GET_MAPPER_SUCCESS} from '../actions/actionTypes';
const INITIAL_STATE = {
    error: null,
    message: null
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MAPPER_SUCCESS:
            return { ...state,  message: action.payload.data, error: null }
        case GET_MAPPER_FAILED:
            return { ...state,  message: null, error: action.payload.error }
        default:
            return state
    }
}