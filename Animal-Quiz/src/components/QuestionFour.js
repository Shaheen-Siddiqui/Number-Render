import React from 'react';
import {Link} from 'react-router-dom'


const QuestionFour = () => {
  return (
    <div>
      <div className='backImage'>
     <img className='ImgStyle' src="https://c4.wallpaperflare.com/wallpaper/678/900/901/animal-images-baby-animals-cool-pictures-cute-animals-wallpaper-preview.jpg" alt="Panda_image" />
     <h4>Choose the correct answer </h4>
      <div className='btn-fild'>
          <button className="btn btn-secondary">Otter </button>
          <button className="btn btn-secondary">Bull </button>
  <Link to="/questiotfive"><button className="btn btn-secondary">Panda </button></Link>
        <button className="btn btn-secondary">Japanese Chin </button>  

      </div>
      </div>


    </div>
  )
}

export default QuestionFour
