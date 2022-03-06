import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function WelcomePage() {
let [inputState,setInputState]=useState();

const Inputfield=(event)=>{
 let value = event.target.value;
 setInputState(value)
};


  return (
    <div>
      <div className='body'>
      <div className='backImage'>
      <div className="BorderBox">
      <h1 className='animalQGame'><strong> Welcome To Animal Quiz Game </strong> </h1>
      <h2 className='EnterYname'>Enter your name </h2>
      <h6> {inputState} </h6>
      <input type="text" name="text" id="" placeholder='your name' />
      <Link to="/questionone"><button  type="submit" className="btn btn-dark">Let's play</button></Link>  
      </div>
    </div>      
    </div>

    </div>
  )
}

export default WelcomePage;
