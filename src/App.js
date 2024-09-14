
import { useState } from 'react';
import './App.css';
import Project from './components/Project';


const data=[

]

function App() {
const[newData,setNewData] = useState(false)
const set =()=>{
  if(data.length>0){
    setNewData(true)
  }
}
  return (
    <div className="App">
      
      <Project Data={data}/>
      
    </div>
  );
  
}

export default App;
