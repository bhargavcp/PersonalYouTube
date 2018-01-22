import React, { Component } from 'react';
import { connect } from 'react-redux';

import './video_player.scss';

class VideoPlayer extends Component {

    snipDescription = (description) => {
        return description.length > 300 ? description.substring(0, 300) + '...' : description;
    };

    renderDetails = (videoData) => {
        if(videoData.snippet){
            return(
                <div className='details'>
                    <div>
                        <div>
                            Description:
                        </div>
                        {this.snipDescription(videoData.snippet.description)}
                    </div>
                </div>
            );
        }
    };

    render(){
        const videoData = this.props.videoViewed.data;
        const url = `https://www.youtube.com/embed/${videoData.id}`;

        return(
            <div className='video-player col-xs-12 col-md-8'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={url}
                            allowFullScreen='allowfullscreen'>
                    </iframe>
                </div>
                {this.renderDetails(videoData)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {videoViewed: state.videoViewed};
}

export default connect(mapStateToProps)(VideoPlayer);
