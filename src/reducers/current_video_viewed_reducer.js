import { CURRENT_VIDEO_VIEWED } from '../../lib/actionStatuses';
import { SUCCESS, NOT_STARTED } from './statusTypes';

const initialState = {
    data: '',
    status: NOT_STARTED,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload, error } = action;

    switch (type){
        case CURRENT_VIDEO_VIEWED:
            return {...state, status: SUCCESS, data: payload};

        default: {
            return state;
        }
    }
}