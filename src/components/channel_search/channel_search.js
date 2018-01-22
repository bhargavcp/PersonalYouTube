import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './channel_list.scss';
import { addChannel, fetchChannels } from '../../actions';
import Suggestions from './suggestions_list';
import SubscribedChannels from './subscribed_channels';

class ChannelSearch extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchChannels(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    render(){
        return(
            <div data-automation='modal-title' className='row'>
                <div className='channel-list col-xs-6 col-md-4'>
                    <SubscribedChannels />

                    <form className = 'input-group' onSubmit={(e) => this.onFormSubmit(e)}>
                        <input
                            id='channel-search-bar'
                            placeholder='Search for Channels to Subscribe'
                            value={this.state.term}
                            className='form-control'
                            onChange={this.onInputChange}
                        />
                        <span className='input-group-btn'>
                            <button type='submit' disabled={!this.state.term} className='btn btn-default'>Submit</button>
                        </span>
                    </form>

                    <Suggestions />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {newChannel: state.newChannel};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchChannels, addChannel}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSearch);