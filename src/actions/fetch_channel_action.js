import axios from 'axios';
import _ from 'lodash';
import { getUrlAndParams } from '../../lib/common';
import { FETCHED_SUGGESTIONS } from '../../lib/actionStatuses';


export const fetchChannels = function(term) {

    const apiParams = {
        part: 'snippet',
        q: term,
        type: 'channel'
    };

    return (dispatch, getState) => {
        const {url, params} = getUrlAndParams(getState, 'search', apiParams);

        axios.get(url, { params: params })
        .then((response) => {
            const channels = response.data.items;
            const suggestionsToIdMap = _.map(channels, (channel) => {
                return _.pick(channel.snippet, ['channelId', 'channelTitle']);
            });

            dispatch({
                type: FETCHED_SUGGESTIONS,
                payload: suggestionsToIdMap
            });

        })
    };
};

