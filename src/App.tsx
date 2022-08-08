import React from 'react';
import { HashRouter as Router, Link, Route} from 'react-router-dom'
import './App.scss';
import iconExample from './components/Icon/iconExample';
import buttonExample from './components/Button/buttonExample';
import dialogExample from './components/Dialog/dialogExample';
import LayoutExample from './components/Layout/LayoutExmaple';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header';
import Aside from './components/Layout/Aside';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import Icon from './components/Icon/Icon';
// const logo =  require("./assets/icons/logo.png")

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
              <Link to='/icon'>
                <span >
                  Icon
                </span>
              </Link>
            </li>
            <li>
              <Link to='/button'>Button</Link>
            </li>
            <li>
              <Link to='/dialog'>Dialog</Link>
            </li>
            <li>
              <Link to='/layout'>Layout</Link>
            </li>
          </ul>
        </Aside >
        <Content className='site-content' >
          <Route path='/icon' component={iconExample} />
          <Route path='/Button' component={buttonExample} />
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
