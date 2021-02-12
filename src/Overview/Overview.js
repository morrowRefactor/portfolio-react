import React, { Component } from 'react';
import APIContext from '../APIContext';
import './Overview.css';

class Overview extends Component {
    static contextType = APIContext;

    render() {
        let avatarImage;
        if(window.innerWidth >= 800) {
            avatarImage = 'https://user-images.githubusercontent.com/58446465/90848378-961b0300-e321-11ea-9afe-2f60af6ee8de.png';
        }
        if(window.innerWidth < 800) {
            avatarImage = 'https://user-images.githubusercontent.com/58446465/88499990-6b38cb80-cf7c-11ea-9e71-9caf9e931674.png'
        }

        return (
            <section className="Overview">
                <div className="Overview_bio">
                    <h2 className='overviewHeader'>KURT MORROW</h2>
                    <p className='overviewSubHeader'>Full-Stack Web Developer</p>
                    <p className='overviewIntroText'>A newly-minted developer with a penchant for user engagement.</p>     
                </div>
            </section>
        );
    };
};

export default Overview;