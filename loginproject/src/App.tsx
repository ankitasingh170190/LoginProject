import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import JwtContext, { JwtInfo } from './JwtContext';
import LandingPage from './LandingPage';
import { Grid } from '@material-ui/core';

function App() {
  const [jwtInfo, setJwtInfo] = useState<JwtInfo | null>(null);
  console.log(jwtInfo);
  return (
    <Grid>
       <JwtContext.Provider value={jwtInfo}>
           <Login setJwtInfo={setJwtInfo} ></Login>
           <LandingPage/>
       </JwtContext.Provider>
    </Grid>
  )
}

export default App;
