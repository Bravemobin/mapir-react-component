import React from 'react';
import './App.css';
import Mapir from './components/mapir'

function App() {
  const Map = Mapir.setToken({
    transformRequest: (url)=> {
      return {
        url: url,
        headers: { 
          'x-api-key': 'Your_API_KEY', //Mapir api key
          'Mapir-SDK': 'reactjs'
        }
      }
  
    }
  })
  return (
    <div className="App">
      <Mapir Map={Map}/>
    </div>
  );
}

export default App;
