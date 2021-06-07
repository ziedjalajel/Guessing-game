import {ThemeProvider} from "styled-components"
import './App.css';
import {theme,GlobalStyle} from "./styles"
import Home from "./Components/Home";
import { useState } from "react";
import React from "react"
import Hints from "./Components/Hints"






function App() {
  const [output,setoutput]=useState("Please enter a number")
  const [number,setnumber]=useState(Math.floor(Math.random()*(100-1)+1))
  const [attempt,setattempt]=useState(1)
  const [level,setlevel]=useState(2)
  const [hint,setHint]= useState(3)
  
  const btnClicked = (userInput)=>{
    let Input=parseInt(userInput)
if(attempt<=5){
    if(Input===number){
      setoutput(`Your number was ${number}, and it's CORRECT ,win again if you can`)
  
      setlevel(level+1)
      setnumber(Math.floor(Math.random()*((10**level)-1)+1))
      setattempt(1)
    } else if(Input < number){
       setoutput(`Too low  Dude !`)
  
    }else if(Input>number){
       setoutput (`DUDE that's high`)
  
    }
    console.log(number)
    setattempt(attempt+1)

  }else {
    setnumber(Math.floor(Math.random()*(100-1)+1))
    setattempt(1)
    setlevel(2)
    setoutput("HAHAHA Loser !! try again")

}

    
  
  
}
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Home click={btnClicked} output={output} level={level} attempt={attempt} /> 
    <Hints hint={hint} setHint={setHint} number={number} level={level}/>
    </ThemeProvider>
    
  );
}

export default App;
