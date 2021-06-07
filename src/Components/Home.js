import {useState} from "react"

const Home = (props) => {
 
  const [userInput,setUserInput] = useState('')
return(
    <>
    <h1>Guessing Game </h1>
    <h2>It's time for a little game </h2>
    <div id="container">
      <p>Level: {props.level-1}</p>
      <p id="outputtext">{props.output} </p>
      <input type="text" id="userInput" value={userInput} onChange={event => setUserInput(event.target.value)}/>
      <button id="btn" onClick={()=>{
        props.click(userInput)
        setUserInput('')
      }
    }>Try ! {6 - props.attempt}</button>
    
    </div>
    </>
)

}
export default Home 