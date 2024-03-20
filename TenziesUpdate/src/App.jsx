import React from 'react'
import Confetti from 'react-dom-confetti'
import { nanoid } from 'nanoid';
import './App.css'
import Die from './Die'


function App() {
  
const [dice,setDice]=React.useState(generateNum())

const[Tenzies,setTenzies]=React.useState(false)

React.useEffect(()=>{
  const check1=dice.every(elem=>elem.isHeld)
  let dhd=dice[0].value
  const check2=dice.every(elem=>elem.value===dhd)
  if(check1&&check2){
    setTenzies(true)
  }

},[dice])

function holdDice(id){
 setDice(dice.map(elem=>
  elem.id===id?{...elem,isHeld:!elem.isHeld}:elem))
}

function generate(){
  return{value:(Math.floor(Math.random()*6)+1),id:nanoid(),isHeld:false}
}


function rollDice(){
  if(Tenzies){
    setDice(generateNum)
    setTenzies(false)
  }
  else{
    setDice(dice.map(elem=>
      elem.isHeld?elem:generate()))
  }
}

let diceElem=dice.map((elem)=>
<Die key={elem.id} value={elem.value} isheld={elem.isHeld} handleClick={()=>holdDice(elem.id)}/>
)

  function generateNum(){
    let array=[]
    for (let i=0; i<10; i++){
      array.push(generate())
    }
    return array
  }

  return (
    <main>
     
       <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dieContainer'>
      {diceElem}
      </div>
      <button id='roll' onClick={rollDice}>{Tenzies?"New Game":"Roll"}</button>
      {Tenzies && <Confetti
                 width={100}
                 height={100}/>}
    </main>
  )
}

export default App
