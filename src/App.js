import { useState } from 'react'
import Header from './component/Header/Header'
import Maps from './component/Map/Map'
import './App.css'
function App() {
  const [pos, setpos] = useState([])
  return (
    <div className="App">
        <Header pos={(data)=>{setpos(...pos,data)}}/>
        <Maps data={pos}></Maps>
    </div>
  );
}

export default App;
