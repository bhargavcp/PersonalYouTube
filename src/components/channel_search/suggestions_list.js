import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash';
import {SUCCESS} from '../../reducers/statusTypes';
import { addChannel } from '../../actions';

class Suggestions extends Component{

    getListOFSuggestions = (suggestions) => {
        return _.map(suggestions, (suggestion) => {
            return <li key={suggestion.channelId} onClick={this.addChannelToList} role='presentation'><a href='#'>{suggestion.channelTitle}</a></li>
        })
    };

    addChannelToList = (e) => {
        const channelName = e.target.innerText;
        const channelId = _.filter(this.props.suggestions.data, (suggestion) => suggestion.channelTitle === channelName);
        this.props.addChannel(channelId);
    };

    render(){
        if(this.props.suggestions.status === SUCCESS){
            return(
                <ul className='nav nav-pills nav-stacked'>
                    {this.getListOFSuggestions(this.props.suggestions.data)}
                </ul>
            );
        }
        return null;
    }
}

function mapStateToProps(state){
    return {suggestions: state.suggestions};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addChannel}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);