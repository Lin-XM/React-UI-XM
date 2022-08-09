import React from 'react';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.scss';
import iconDemo from './components/Icon/iconDemo';
import Icon from './components/Icon/Icon';
import DialogDemo from './components/Dialog/dialogDemo';
import layoutDemo from './components/Layout/layoutDemo';




function App() {
  return (
    <Router>
        <div  className='page'>
          <div  className="site-header">
            <div className="site-logo">
              <Icon name='logo' style={{height:'48px',width:'48px'}} />
              <span>XM</span>
            </div>
          </div>

          <div className='site-main'>
            <div className="site-aside">
              <h2>组件</h2>
              <ul>
                <li >
                  <NavLink to='/icon'>
                <span >
                  Icon
                </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dialog'>Dialog</NavLink>
                </li>
                <li>
                  <NavLink to='/layout'>Layout</NavLink>
                </li>
              </ul>
            </div >

            <div className='site-content' >
              <Route path='/icon' component={iconDemo} />
              <Route path='/dialog' component={DialogDemo} />
              <Route path='/layout' component={layoutDemo} />
            </div>
          </div>

          <div className='site-footer' >
            &copy; 版权归xxxx所有
          </div>
        </div>

    </Router>
  );
}

export default App;
