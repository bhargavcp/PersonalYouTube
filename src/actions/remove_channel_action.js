import _ from 'lodash';
import { REMOVE_CHANNEL } from '../../lib/actionStatuses';

export const removeChannel = function(channel) {
    return (dispatch, getState) => {
        const currentChannels = getState().subscribedChannels.data;

        const newChannelList = _.filter(currentChannels, (channelFromState) => {
            return channelFromState.channelId !== channel;
        });

        dispatch({
            type: REMOVE_CHANNEL,
            payload: newChannelList
        });
    };
};

