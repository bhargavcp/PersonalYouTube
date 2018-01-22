import axios from 'axios';
import { getUrlAndParams } from '../../lib/common';
import { CURRENT_VIDEO_VIEWED } from '../../lib/actionStatuses';

export const updateCurrentlyViewedVideo = function(videoId) {

    return (dispatch, getState) => {
        const apiParams = {
            part: 'snippet',
            id: videoId
        };

        const {url, params} = getUrlAndParams(getState, 'videos', apiParams);

        axios.get(url, { params: params })
            .then((response) => {
                dispatch({
                    type: CURRENT_VIDEO_VIEWED,
                    payload: response.data.items[0]
                });
            })
    };
};

