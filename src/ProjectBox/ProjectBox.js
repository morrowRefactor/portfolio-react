import React, { Component } from 'react';
import './ProjectBox.css';

class ProjectBox extends Component {

    render() {   
        let serverLink;
        if(this.props.serverLink) {
            serverLink = <a href={this.props.serverLink} target='_blank' rel='noopener noreferrer'><button className='projectBoxButton'>View API Code</button></a>
        };

        return (
            <section className='ProjectBox'>
                <h3 className='projectBoxHeader'>{this.props.name}</h3>
                <p className='projectBoxSummary'>{this.props.summary}</p>
                <p className='projectBoxTech'>Uses: {this.props.tech}</p>
                <section className='ProjectBox_bottom'>
                    <div className='ProjectBox_buttons'>
                        <a href={this.props.appLink} target='_blank' rel='noopener noreferrer'><button className='projectBoxButton'>View App</button></a>
                        <a href={this.props.codeLink} target='_blank' rel='noopener noreferrer'><button className='projectBoxButton'>View Code</button></a>
                        {serverLink}
                    </div>
                    <img className='projectBoxImage' src={this.props.image} alt={this.props.name} />
                </section>
            </section>
        );
    };
};

export default ProjectBox;