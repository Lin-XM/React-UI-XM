import React from 'react';
import { HashRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import iconExample from './components/Icon/iconExample';
import buttonExample from './components/Button/buttonExample';
import dialogExample from './components/Dialog/dialogExample';
import Icon from './components/Icon/Icon'


function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="logo">标题</div>
        </header>
      </div>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to='/icon'>
                <span><Icon name='settings' />Icon</span>
              </Link>
            </li>
            <li>
              <Link to='/button'>Button</Link>
            </li>
            <li>
              <Link to='/dialog'>Dialog</Link>

            </li>
          </ul>
        </aside>
        <main>
          <Route path='/icon' component={iconExample} />
          <Route path='/Button' component={buttonExample} />
          <Route path='/dialog' component={dialogExample} />
        </main>
      </div>
    </Router>
  );
}

export default App;
