// store/actions/drugActions.js
export const FETCH_DRUGS_REQUEST = 'FETCH_DRUGS_REQUEST';
export const FETCH_DRUGS_SUCCESS = 'FETCH_DRUGS_SUCCESS';
export const FETCH_DRUGS_FAILURE = 'FETCH_DRUGS_FAILURE';

export const fetchDrugsRequest = () => ({
    type: FETCH_DRUGS_REQUEST,
});

export const fetchDrugsSuccess = (drugs) => ({
    type: FETCH_DRUGS_SUCCESS,
    payload: drugs,
});

export const fetchDrugsFailure = (error) => ({
    type: FETCH_DRUGS_FAILURE,
    payload: error,
});