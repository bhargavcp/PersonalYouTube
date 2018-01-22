import React, { Component } from 'react';
import SearchBar from './video_search/video_search_bar';
import ChannelSearch from './channel_search/channel_search';
import VideoCarousel from './video_carousel/video_carousel';
import VideoPlayer from './video_player/video_player';
import AboutModal from '../components/about_modal/about_modal';

import '../../style/main.scss';

export default class App extends Component {
  render() {
    return (
        <div>
            <div className='image-holder'>
                <img className='logo' src='../../public/logo.png' alt='logo' />
            </div>
            <AboutModal />
            <div id='main-container'>
                <SearchBar />
                <VideoPlayer />
                <ChannelSearch />
                <VideoCarousel />
            </div>
        </div>
    );
  }
}
