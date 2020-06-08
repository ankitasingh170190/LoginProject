import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import { JwtInfo } from './JwtContext';

function App() {
  const [jwtInfo, setJwtInfo] = useState<JwtInfo | null>(null);
  return (
    <div className="App">
       <Login setJwtInfo={setJwtInfo} ></Login>
       <Screen/>
    </div>
  );
}

export default App;
