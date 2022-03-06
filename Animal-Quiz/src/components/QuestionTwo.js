
import React from 'react';
import {Link} from 'react-router-dom'


const QuestionOne = () => {
  return (
    <div>
      <div className='backImage'>
     <img className='ImgStyle' src="https://orecax.files.wordpress.com/2014/01/cute-cat-sweet-wallpaper.jpg" alt="cat_image" />
     <h4>Choose the correct answer </h4>
      <div className='btn-fild'>
          <button className="btn btn-secondary">Ox </button>
          <button className="btn btn-secondary">puppy. </button>
        <Link to="/questiothree"><button className="btn btn-secondary">Cat </button></Link>  
          <button className="btn btn-secondary">Panda </button>

      </div>
      </div>


    </div>
  )
}

export default QuestionOne
