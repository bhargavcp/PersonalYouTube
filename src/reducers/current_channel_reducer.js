import { UPDATE_CURRENT_CHANNEL } from '../../lib/actionStatuses';
import { SUCCESS, NOT_STARTED } from './statusTypes';

const initialState = {
    data: [],
    status: NOT_STARTED,
    error: {}
};

export default function (state = initialState, action) {

    const { type, payload, error } = action;

    switch (type){
        case UPDATE_CURRENT_CHANNEL:
            return {...state, status: SUCCESS, data: payload};

        default: {
            return state;
        }
    }
}