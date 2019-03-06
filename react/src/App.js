import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/layout/Header";
import Sidebar from './components/layout/Sidebar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header subtitle="React Router"/>
              <Sidebar/>
              <div className={'rightContentContainer'}>
                    <div className="leftContentContainer">
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/about-us' component={AboutUs} />
                        <Route path='/about-us/profile' component={ContactUs} />
                        <Route path='/contact-us' component={ContactUs} />
                        <Route component={PageNotFound} />
                    </Switch>
                    </div>
                </div>
              
          </div>
      </Router>
  );
  }
}

export default App;
