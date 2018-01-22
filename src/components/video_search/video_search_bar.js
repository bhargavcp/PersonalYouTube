import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchVideos} from '../../actions/index';

import './video_search_bar.scss';

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchVideos(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    render(){
        return(
            <form className ='input-group' onSubmit={this.onFormSubmit}>

                <input
                    id='video-search-bar'
                    placeholder='Search for Videos'
                    value={this.state.term}
                    className='form-control'
                    onChange={this.onInputChange}
                />

                <span className='input-group-btn'>
                    <button type='submit' disabled={!this.state.term} className='btn btn-default'>Submit</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {videos: state.videos};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);