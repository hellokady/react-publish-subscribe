import { useEffect, useState } from 'react'
import './App.css'
import { EventEmitter } from './EventEmitter';

const event = new EventEmitter();

const ChildA = () => {
  return (
    <div>
      <p>ChildA</p>
      <input type="text" onChange={e => {
        event.emit('change', e.target.value)
      }} />
    </div>
  );
};

const ChildB = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    event.on('change', value => {
      console.log(value, '————ChildA发布的值');
      setValue(value);
    })
  }, []);

  return (
    <div>
      <p>ChildB</p>
      <h5>{value}</h5>
    </div>
  );
};

function App() {

  return (
    <div className="App">
      <ChildA />
      <ChildB />
    </div>
  )
}

export default App
