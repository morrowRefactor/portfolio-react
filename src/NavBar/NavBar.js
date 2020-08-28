import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext';
import './NavBar.css';

class Navbar extends Component {
    static contextType = APIContext;

    render() {
        return (
            <nav className='Topnav'>
                <Link className='topNavImgLink' to='/'><img className='topNavImage' alt='Kurt Morrow Web Developer' src='https://user-images.githubusercontent.com/58446465/91518860-fb34a280-e8a5-11ea-8b17-abc016c98553.png' /></Link>
                <div><Link className='topnavHeader' to='/'>Kurt Morrow Web Developer</Link></div>
                <div className='hamburger'><button className='hamburgerButton' onClick={() => {this.context.toggleNav()}}>&#9776;</button></div>
                <div className='break'></div>
                <ul className={this.context.navbar}>
                    <li><a className='topNavLink' href='https://github.com/morrowRefactor' target='_blank' title='Kurt Morrow GitHub' rel='noopener noreferrer'>GitHub</a></li>
                    <li><Link className='topNavLink' to='/about'>Bio/Contact</Link></li>
                </ul>
            </nav>
        );
    };
};

export default Navbar;