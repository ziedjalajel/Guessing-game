

const Hints = (props) => {
    const numberLength = ()=>{
       return String(props.number).length
    }
    const aboveOrBelow = ()=>{
        const random1 = Math.floor(Math.random()*((10**props.level)-1)+1)
        if(random1>props.number){
            return ` Below ${random1}`
        }else return `Above ${random1}`
    }
    const inBetween = () => {
        const random1 = Math.floor(Math.random()*props.number)
        const random2 = Math.floor(Math.random()*((10**props.level)-(props.number+1))+props.number)
        return `Number is in between ${random1} , and ${random2}`
        
    } 
return (
    <div id="container2">
        <h2> {props.hint>0 ? `Hints ${props.hint}`:'No More Hints'} </h2>
        {props.hint===2 &&<h4> {`It's a ${numberLength()} digit number `}</h4>}
        {props.hint===1 &&<h4> {aboveOrBelow()}</h4>}
        {props.hint===0 &&<h4>{ inBetween()}</h4>}
        {props.hint>0 && <button className="hint" onClick={()=>props.setHint(props.hint-1)}>Get Hints </button>}
        

    </div>
)


}
export default Hints