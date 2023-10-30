import logo from './logo.svg';
import './App.css';
import ColorGuess from './components/ColorGuess';
import { useState,useEffect } from 'react';
function App() {
  let [colorData,setColorData]=useState()
  let [refresh,setRefresh] =useState(false)
  useEffect(()=>{
      let fetchData = async ()=>{
          let resp = await fetch ('https://x-colors.yurace.pro/api/random?number=3')
          let data = await resp.json()
          console.log(data)
          setColorData(data)
          setRefresh(false)
         
      }
      fetchData()
  },[refresh])
  return (
    <div >
      <ColorGuess colorData={colorData} setRefresh={setRefresh}/>
    </div>
  );
}

export default App;
