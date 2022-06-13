import React from 'react';
import './App.css';
import Views from './views/Views'
import { BrowserRouter} from 'react-router-dom';


const App = () => {

  return (
  <>
    <BrowserRouter> 
      <Views/>
    </BrowserRouter> 
  </>
  )}

export default App;