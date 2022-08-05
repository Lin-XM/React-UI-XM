import React from 'react';
import './App.css';
import Button from './components/Button';
import Icon from './components/Icon';


const f1 = (event:React.MouseEvent<SVGElement | SVGUseElement>)=>{
  console.log(event.target);
}

function App() {
  return (
    <div className="App" >
      <span>hi</span>
      <Button/>
      <Icon name='settings' onClick={f1} />
    </div>
  );
}

export default App;
