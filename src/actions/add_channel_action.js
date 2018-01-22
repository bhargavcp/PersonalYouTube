import { ADD_CHANNEL } from '../../lib/actionStatuses';

const checkIfChannelCanBeAdded = (stateList, newChannel) => {
    if (stateList.length <= 4){
        for (let i = 0; i < stateList.length; i++) {
            if (stateList[i] === newChannel) {
                return false;
            }
        }
        return true;
    }
    return false;
};

export const addChannel = function(channel) {
    return (dispatch, getState) => {
        if(channel){
            if (checkIfChannelCanBeAdded(getState().subscribedChannels.data, channel[0])){
                dispatch({
                    type: ADD_CHANNEL,
                    payload: getState().subscribedChannels.data.concat(channel)
                });
            }
        }
    };
};

