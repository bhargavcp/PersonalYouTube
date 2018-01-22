import { combineReducers } from 'redux';
import fetchedChannels from './fetch_channels_reducer';
import suggestions from './fetch_suggestions_reducer';
import addChannel from './subscribed_channels_reducer';
import currentChannel from './current_channel_reducer';
import currentVideos from './current_videos_reducer';
import currentVideoViewed from './current_video_viewed_reducer';

const rootReducer = combineReducers({
    configuration: (state = {}) => state,
    channels: fetchedChannels,
    suggestions: suggestions,
    subscribedChannels: addChannel,
    currentChannel: currentChannel,
    currentVideos: currentVideos,
    videoViewed: currentVideoViewed
});

export default rootReducer;
