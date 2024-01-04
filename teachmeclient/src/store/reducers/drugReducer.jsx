// store/reducers/prescriptionReducer.js
import {
    FETCH_DRUGS_REQUEST,
    FETCH_DRUGS_SUCCESS,
    FETCH_DRUGS_FAILURE,
} from '../actions/drugsActions';

const initialState = {
    prescriptions: [],
    loading: false,
    error: null,
};

const drugReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRUGS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_DRUGS_SUCCESS:
            return {
                ...state,
                drugs: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_DRUGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default drugReducer;
