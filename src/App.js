import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import CardUI from './components/CardUI/CardUI';
import Camera from './components/Camera/Camera';


function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <CardUI></CardUI>
      <Camera></Camera>
    </div>
  );
}

export default App;
