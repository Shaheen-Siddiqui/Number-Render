import React from 'react'
import {Link} from 'react-router-dom'

const TryAgain = () => {
  return (
    <>
      <div className="TryagainBox">
      <h1>**!!GAME ENDED!!**</h1>
      <h2 className='Chances'><strong>5 chances over </strong> you did very Well</h2> <br />
      <h4 className='playaGain'>You want to play again </h4>
    <Link to="/"><button className='tryAgainBtn btn btn-danger'>Play again </button></Link>  
      </div>
    </>
  )
}

export default TryAgain
