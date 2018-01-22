import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeChannel, updateCurrentChannel} from '../../actions'

class SubscribedChannels extends Component{

    getSubscribedChannels = () => {
        return _.map(this.props.subscribedChannels.data, (channel) => {
            return (
                <a onClick={this.currentChannelSelected} data-channelid={channel.channelId} key={channel.channelId} href='#' className='list-group-item'>
                    {channel.channelTitle}
                    <span onClick={this.removeChannelFromSubscriptions} className='badge'>x</span>
                </a>
            );
        });
    };

    currentChannelSelected = (e) => {
      const channelId = e.target.dataset.channelid;
      this.props.updateCurrentChannel(channelId);
    };

    removeChannelFromSubscriptions = (e) => {
        this.props.removeChannel(e.target.parentNode.dataset.channelid);
    };

    render(){
        if(this.props.subscribedChannels){
            return (
                <div className='list-group'>
                    {this.getSubscribedChannels()}
                </div>
            );
        }
        return '';
    }
}

function mapStateToProps(state){
    return {subscribedChannels: state.subscribedChannels};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeChannel, updateCurrentChannel}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribedChannels);