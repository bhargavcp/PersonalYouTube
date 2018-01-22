import React, { Component } from 'react';
import Modal from 'react-modal';

import './about_modal.scss';

const customStyles = {
    overlay : {
        position          : 'fixed',
        backgroundColor   : 'rgba(255, 255, 255, 0.75)',
        zIndex            : 1000000
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        width                 : '600px',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class AboutModal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    getParent() {
        return document.body;
    }

    render() {
        return (
            <div>
                <div id='mybutton'>
                    <button onClick={this.openModal} type='button' className='about'>How To</button>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    parentSelector={this.getParent}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel='About the App'
                >
                    <h3>Welcome to your Personal </h3><h3 ref={subtitle => this.subtitle = subtitle}>YouTube </h3><h3>Space</h3>
                    <ul>
                        <li>Here you can watch your favorite YouTube videos without ads!</li>
                        <li><u>How to search for videos</u>: The top search bar can be used to directly search for videos across YouTube.</li>
                        <li><u>How to search and subscribe to channels</u>: The small search bar on right side of the page can be used to search for channels.
                            Clicking on a channel from the drop-down list would automatically add it to your subscriptions.
                            Please note: Subscriptions are currently limited to 5 channels.
                        </li>
                        <li><u>View videos from a subscribed channel</u>: Click on the channel name (found above the channel search bar).
                        </li>
                        <li><u>Removing channel from subscriptions</u>: Just click on the 'x' next to the channel name.
                        </li>
                        <li>Why 5 channels you ask? Well.. I really don't know why. But I may add the functionality to have an infinite subscription list.
                            Until then, please live your life 5 channels at a time :)
                        </li>
                    </ul>
                </Modal>
            </div>
        );
    }
}

export default AboutModal;