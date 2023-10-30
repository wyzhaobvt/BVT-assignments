import { useEffect, useState } from "react";

const Question = () => {
    let [questiondata,setQuestiondata]=useState()
    let [show,setShow]=useState(false)
    useEffect(()=>{
        let fetchData = async()=>{
            let resp = await fetch ('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple')
            let data = await resp.json()
            setQuestiondata(data.results)
            console.log(data.results)
        }
        fetchData()
    },[])
    let clickHandler=()=>{
        setShow(true)
    }
  
    return ( 
        <div className="m-3">
        <button type="button" onClick={clickHandler} class="btn btn-primary my-3">Questions on Animals</button>

        {show && questiondata.map((ele)=>(
            <div>
            <h1>{ele.question}</h1>
            <h3 className="text-info">{ele.correct_answer}</h3>
            </div>
        )
        
        )}
        </div>
     );
}
 
export default Question;