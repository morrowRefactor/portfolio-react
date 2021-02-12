import React, { Component } from 'react';
import './BioContact.css';

class BioContact extends Component {

    render() {
        return (
            <section className='BioContact'>
                <section className='BioContact_overview'>
                    <img className="bioContactImage" src='https://user-images.githubusercontent.com/58446465/88499990-6b38cb80-cf7c-11ea-9e71-9caf9e931674.png' alt="morrowRefactor Avatar" />
                    <div className='bioContactMediaLeft'>
                        <h3>Contact Info</h3>
                        <p>Email: <a className='bioContactLink' href='mailto:kurt.morrow@gmail.com?subject=Regarding%20your%20portfolio' target='_blank' rel='noopener noreferrer'>kurt.morrow@gmail.com</a></p>
                        <p>LinkedIn: <a className='bioContactLink' href='https://www.linkedin.com/in/kurt-morrow/' target='_blank' title='Kurt Morrow LinkedIn Profile' rel='noopener noreferrer'>www.linkedin.com/in/kurt-morrow</a></p>
                    </div>
                </section>
                <div className='BioContact_bio'>
                    <h2>Hi, I’m Kurt.</h2>
                    <p>I recently completed an immersive Front End Web Development program at Thinkful. Prior to my pursuit of Web Development I spent about 10 years spelunking in the world of Marketing Operations and Automation. I’ve always been drawn to building things and solving puzzles.</p>
                    <p>Coding was a natural draw for me as it appeals to my linear way of thinking. I like to think of it as a wonderful combination of mathematics and language - it’s a structured, rules-based environment, but there’s room to find efficiencies and be creative. As I look forward to a career in Web Development, I am excited to work within a team of talented programmers; to learn via collaboration, expand my skill set, and make meaningful contributions.</p>
                    <p>When I’m not working on my coding coursework, I tend to strike a balance between being a restless wanderer and a homebody recluse. Equally happy hiking with my dogs or vegging with them on the couch; staying at home playing board games or traveling abroad with my wife.</p>
                </div>
                <div className='BioContact_contact'>
                    <h3>Contact Info</h3>
                    <p>Email: <a className='bioContactLink' href='mailto:kurt.morrow@gmail.com?subject=Regarding%20your%20portfolio' target='_blank' rel='noopener noreferrer'>kurt.morrow@gmail.com</a></p>
                    <p>LinkedIn: <a className='bioContactLink' href='https://www.linkedin.com/in/kurt-morrow/' target='_blank' title='Kurt Morrow LinkedIn Profile' rel='noopener noreferrer'>www.linkedin.com/in/kurt-morrow</a></p>
                </div>
            </section>
        );
    };
};

export default BioContact;