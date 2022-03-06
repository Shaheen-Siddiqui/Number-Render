import React, { useState } from 'react';
import {Link} from 'react-router-dom'


const QuestionOne = () => {
  let [dogState,setDogState]=useState("Lion");
  return (
    <div>
      <div className='backImage'>
     <img className='ImgStyle' src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lion_image" />
     <h4>Choose the correct answer </h4>
      <div className='btn-fild'>
          <button className="btn btn-secondary">Squirrel. </button>
          <button className="btn btn-secondary"> Dog  </button>
          <button className="btn btn-secondary">Chimpanzee </button>
        <Link to='/questiotwo'><button className="btn btn-secondary"> {dogState} </button></Link>  

      </div>
      </div>


    </div>
  )
}

export default QuestionOne
