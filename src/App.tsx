import React from 'react';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.scss';
import iconDemo from './components/Icon/iconDemo';
import dialogExample from './components/Dialog/dialogExample';
import LayoutExample from './components/Layout/LayoutExmaple';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header';
import Aside from './components/Layout/Aside';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import Icon from './components/Icon/Icon';




function App() {
  return (
    <Router>
      <Layout  className='page'>
        <Header  className="site-header">
          <div className="site-logo">
            <Icon name='logo' style={{height:'48px',width:'48px'}} />
            <span>XM</span>
          </div>
        </Header>
      <Layout>
        <Aside className="site-aside">
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
        </Aside >
        <Content className='site-content' >
          <Route path='/icon' component={iconDemo} />
          <Route path='/dialog' component={dialogExample} />
          <Route path='/layout' component={LayoutExample} />
        </Content>
      </Layout>
       <Footer className='site-footer' >
         &copy; 版权归xxxx所有
       </Footer>
      </Layout>
    </Router>
  );
}

export default App;
