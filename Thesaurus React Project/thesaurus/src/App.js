import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState()
  const [searchTerm,setSearchTerm] = useState()
  let searchHandler = (e)=>{
    setSearchTerm(e.target.value)
  }

  let clickHandler = async (e)=>{
    e.preventDefault()
    const resp = await axios(`https://api.datamuse.com/words?rel_syn=${searchTerm}`)
    let data = await resp.data
    setData(data) 
  }

  return (
   <div className='m-5'>
      <h3>Synonym Dictionary</h3>
      <input onChange={searchHandler}></input>
      <button type="submit" className="btn btn-primary ms-3" onClick={clickHandler}>Find</button>

      {(data.length!==0)?
      <><h4 className='mt-5'>Result</h4>
      {data.map((ele,i)=>(<p key={ele.score}>{ele.word}</p>))}</>
      :
      <h5>Not Find</h5>
      }
   </div>
  );
}

export default App;
