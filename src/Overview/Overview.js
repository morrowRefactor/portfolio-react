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
                <img className="overviewImage" src={avatarImage} alt="morrowRefactor Avatar" />
                <div className="Overview_bio">
                    <h2 className='overviewHeader'>Hi, I’m Kurt.<br/>I’m a newly-minted web developer with a penchant for user engagement.</h2>
                    <p>I’m a current student of the Front End Web Development program at Thinkful. Prior to my pursuit of Web Development I spent about 10 years spelunking in the world of Marketing Operations and Automation. I’ve always been drawn to building things and solving puzzles.</p>     
                </div>
            </section>
        );
    };
};

export default Overview;