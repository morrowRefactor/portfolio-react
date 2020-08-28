import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Overview from '../Overview/Overview';
import ProjectsMain from '../ProjectsMain/ProjectsMain';
import BioContact from '../BioContact/BioContact';
import APIContext from '../APIContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbar: 'hidden'
    };
  };

  toggleNav = () => {
    const css = (this.state.navbar === 'hidden') ? 'show' : 'hidden';
    this.setState({
      navbar: css
    });
  };

  render() {
    const value = {
      navbar: this.state.navbar,
      toggleNav: this.toggleNav
    };

    return (
      <APIContext.Provider value={value}>
        <div className="App">
          <NavBar />
          <Route 
            exact
            path='/about'
            component={BioContact}
          />
          <Route 
            exact
            path='/'
            component={Overview}
          />
          <Route
            exact
            path='/'
            component={ProjectsMain}
          />
        </div>
      </APIContext.Provider>
    );
  };
};

export default App;
