import React from 'react';
import {Link} from 'react-router-dom'


const QuestionFive = () => {
  return (
    <div>
      <div className='backImage'>
     <img className='ImgStyle' src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg" alt="Doggy_image" />
     <h4>Choose the correct answer </h4>
      <div className='btn-fild'>
        <Link to="/tryagain"><button className="btn btn-secondary">Dogy </button></Link>  
          <button className="btn btn-secondary"> Tiger </button>
          <button className="btn btn-secondary">Panda </button>
         <button className="btn btn-secondary"> Wolf</button>

      </div>
      </div>


    </div>
  )
}

export default QuestionFive
