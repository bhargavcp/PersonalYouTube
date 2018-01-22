import { FETCHED_SUGGESTIONS } from '../../lib/actionStatuses';
import { SUCCESS, NOT_STARTED } from './statusTypes';

const initialState = {
    data: [],
    status: NOT_STARTED,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload, error } = action;

    switch (type){
        case FETCHED_SUGGESTIONS:
            return {...state, status: SUCCESS, data: payload};

        default: {
            return state;
        }
    }
}