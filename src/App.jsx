import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const schedule = {
  title: "CS Courses for 2018-2019"
};



const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <div class="title">
        <h1>{schedule.title}</h1>
      </div>
        
        
      </header>
    </div>
  );
};

export default App;
