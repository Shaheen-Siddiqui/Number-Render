import React from 'react';
import {Link} from 'react-router-dom'


const QuestionThree = () => {
  return (
    <div>
      <div className='backImage'>
     <img className='ImgStyle' src="https://lh3.googleusercontent.com/eInAjoYk3j3_mghDS4rKofqzn9GTJE8hqR8WVij3afb2XpnoU-IhFBa5Pkko2D8" alt="Elephant_Image" />
     <h4>Choose the correct answer </h4>
      <div className='btn-fild'>
          <button className="btn btn-secondary">pig </button>
          <button className="btn btn-secondary">Bear </button>
          <button className="btn btn-secondary">Chimpanzee </button>
        <Link to='/Questionfour'><button className="btn btn-secondary">Elephant </button></Link>  

      </div>
      </div>


    </div>
  )
}

export default QuestionThree;
