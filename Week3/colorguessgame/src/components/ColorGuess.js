

const ColorGuess = ({colorData,setRefresh}) => {

    if (colorData){
    var randomColor = colorData[Math.floor(Math.random()*colorData.length)].hex
  
    var color1 = colorData[0].hex
    var color2 = colorData[1].hex
    var color3 = colorData[2].hex
    }
 
    let target
    let clickHandler=(e)=>{
        if (randomColor === e.target.innerText){
            let result = document.createElement('h6')
            result.innerText = 'Correct!'
            result.classList.add('text-center')
            target = e.target
            e.target.parentElement.appendChild(result)
        }
        else{
            let result = document.createElement('h6')
            result.innerText = 'Incorrect!'
            result.classList.add('text-center')
            target = e.target
            e.target.parentElement.appendChild(result)
        }
        setTimeout(() => {
            setRefresh(true)
           target.parentElement.removeChild(target.parentElement.children[1])
        }, 1000);
        
    }
    return ( 
        <div className="d-flex flex-column align-items-center mt-3">
            <h1>Color Guessing Game</h1>
            <div id='coloredSquare' className="my-3" style={{backgroundColor:randomColor}}>

            </div>
        {colorData?
        <div className="d-flex">
        <div>
        <button type="button" className="btn btn-primary mx-5" onClick={clickHandler}>{color1}</button>
        </div>
        <div>
        <button type="button" className="btn btn-primary mx-5" onClick={clickHandler}>{color2}</button>
        </div>
        <div>
        <button type="button" className="btn btn-primary mx-5" onClick={clickHandler}>{color3}</button>
        </div>
        </div>
        :''}
        </div>
        
     );
}
 
export default ColorGuess;