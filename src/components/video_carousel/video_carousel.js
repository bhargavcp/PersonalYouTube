import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';
import _ from 'lodash';
import { SUCCESS } from '../../reducers/statusTypes';

import { updateCurrentlyViewedVideo } from '../../actions';
import './video_carousel.scss';

class VideoCarousel extends Component {

    getVideosForCarousel(){
        return _.map(this.props.currentVideos.data, (video) => {
            return (
                <div data-videoid={video.id.videoId} onClick={this.watchVideo} className='col-md-4' key={video.id.videoId}>
                    <div className='thumbnail'>
                        <a href='#'>
                            <img src={video.snippet.thumbnails.default.url} />
                            <div className='caption'>
                                <p>{video.snippet.title}</p>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });
    }

    findAcestorWithVideoId = (ele) => {
        while((ele = ele.parentElement) && !ele.dataset.videoid);
        return ele.dataset.videoid;
    };

    watchVideo = (e) => {
        let videoId = this.findAcestorWithVideoId(e.target);
        this.props.updateCurrentlyViewedVideo(videoId);
    };

    render() {
        const settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };

        if(this.props.currentVideos.status === SUCCESS){
            return (
                <div className='carousel-container'>
                    <Slider {...settings}>
                        {this.getVideosForCarousel()}
                    </Slider>
                </div>
            );
        }
        return <div />;
    }
}

function mapStateToProps(state){
    return {currentVideos: state.currentVideos};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ updateCurrentlyViewedVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCarousel);