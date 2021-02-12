import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import APIContext from '../APIContext';
import './NavBar.css';

class Navbar extends Component {
    static contextType = APIContext;

    render() {
        return (
            <nav className='Topnav'>
                <Link className='topNavImgLink' to='/'><img className='topNavImage' alt='Kurt Morrow Web Developer' src='https://user-images.githubusercontent.com/58446465/107706913-ea21f700-6c75-11eb-9e0a-e35cd788b17a.png' /></Link>
                <div className='hamburger'><button className='hamburgerButton' onClick={() => {this.context.toggleNav()}}>&#9776;</button></div>
                <div className='break'></div>
                <ul className={this.context.navbar}>
                    <li><a className='topNavLink' href='https://github.com/morrowRefactor' target='_blank' title='Kurt Morrow GitHub' rel='noopener noreferrer'>GitHub</a></li>
                    <li>{this.props.location.pathname === '/about' ? <Link className='topNavLink' to='/'>Projects</Link> : <Link className='topNavLink' to='/about'>Bio/Contact</Link>}</li>
                </ul>
            </nav>
        );
    };
};

export default withRouter(Navbar);