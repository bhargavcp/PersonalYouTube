import axios from 'axios';
import { getUrlAndParams } from '../../lib/common';
import { UPDATE_VIDEO_LIST } from '../../lib/actionStatuses';

export const fetchVideos = function(searchTerm) {
    const apiParams = {
        part: 'snippet',
        q: searchTerm,
        type: 'video',
        maxResults: 50,
        pageToken: ''
    };

    function fetchVideos(url, params, nextPageToken){
        params.pageToken = nextPageToken;
        return axios.get(url, { params: params })
            .then((response) => response.data);
    }

    return async (dispatch, getState) => {
        const {url, params} = getUrlAndParams(getState, 'search', apiParams);

        const videos = [];
        let nextPageToken = '';

        for (let i = 0; i < 2; i++){
            if(i === 0 || nextPageToken){
                const results = await fetchVideos(url, params, nextPageToken);
                videos.push.apply(videos, results.items);
                nextPageToken = results.nextPageToken;
            }
        }

        dispatch({
            type: UPDATE_VIDEO_LIST,
            payload: videos
        })
    }
};

