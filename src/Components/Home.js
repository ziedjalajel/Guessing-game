

const Home = (props) => {
    
return(
    <>
    <h1>Guessing Game </h1>
    <h2>It's time for a little game </h2>
    <div id="container">
      <p>Level: {props.level-1}</p>
      <p id="outputtext">{props.output} </p>
      <input type="text" id="userInput" value={props.userInput} onChange={event => props.setUserInput(event.target.value)}/>
      <button id="btn" onClick={()=>props.click()}>Try ! {6 - props.attempt}</button>
    
    </div>
    </>
)

}
export default Home 